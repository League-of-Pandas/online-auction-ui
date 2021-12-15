import useResource from "../hooks/useItems";
import { useState } from "react";
import { useRouter } from 'next/router';
import Moment from 'moment';
import Link from "next/link";


export default function SearchResult(){
    const router = useRouter()
  console.log(router.query);
  let search = Object.values(router.query)[0];
  let new_name = search.replace(/ /g,'')

  const CATEGORY_CHOICES = [
    ("All", "All"),
    ("Vehicles", "Vehicles"),
    ("Coins & Bullion", "Coins & Bullion"),
    ("Art", "Art"),
    ("Furniture", "Furniture"),
    ("Electronics", "Electronics"),
    ("Jewelry", "Jewelry"),
  ];

    const { loading,resources } = useResource();

        let arr = []
        function filterItems (){
          for(let i=0; i<resources?.length; i++){
            let replaced_name = resources[i].item_name.replace(/ /g,'')
            if(replaced_name.includes(new_name)){
              console.log(resources[i].item_name);
              console.log(resources[i]);
              arr.push(resources[i])
              console.log(arr);
                return arr;
              
                
          }}}
          let filtered_items = filterItems()
          const [result, setArr] = useState(filtered_items);
          let newArr = []
          async function filter(event) {
            let category = event.target.value;

            if (loading) {
              console.log('loading',loading);
            } else {
        
            if (category !== "All" && filtered_items) {
              filtered_items.filter((item) => {
                if (item.category === category) {
                  newArr.push(item);
                }
                setArr(() => {
                  return newArr;
                });
              });
            } else {
              setArr(() => {
                return arr;
              });
            }
          }
        }
          
          
        

    return(
        <>
        <div className="container mx-8">
        <label htmlFor="cars" className="mx-2 bg-white rounded-md focus:outline-none">Category</label>
        <select className="px-2 text-sm text-gray-700 " name="cars" id="cars" onChange={filter}>
          {CATEGORY_CHOICES.map((category, key) => {
            return (
              <option className="px-4 py-2 text-sm text-gray-700" value={category} key={`${key}`}>
                {category}
              </option>
            );
          })}
        </select>
      </div>
    {arr.length?result.map((item,key)=>{
        console.log(item);
        let newDate = new Date()
        let dayNow = newDate.getDate()      // Current Day
        let hourNow = newDate.getHours()    // Current Hour
        let minateNow = newDate.getMinutes()
        var dt = item.end_date;             // End Date from API
        var day = Moment(dt).format('D')
        day = day - dayNow                  // rest of Day
        var hours = Moment(dt).format('H')
        hours = Math.abs(hours - hourNow)
        var minate = Moment(dt).format('M')
        minate = Math.abs(minate - minateNow)    // rest of Hour
        return (

          <div key={`${key}`} className="container">
            <div className="flex items-center pr-4 m-10 bg-blue-100 drop-shadow-xl rounded-2xl">
              <img
                className="w-56 h-40 mr-8 rounded-lg"
                alt="resources"
                src={item.image}
                width={300}
                height={300}
              />
              <div className="flex flex-col justify-around center">
                <h3 className="font-bold">{item.item_name}</h3>
                <h4 className="text-sm">
                  Bids:{item.bidder_counter}
                </h4>
                <h4 className="text-sm">
                  current bid:{item.init_price} $
                </h4>
                <h4 className="text-sm">
                  {
                    (item.is_sold == false && item.is_expirated == false) ? (
                      <p key={item.id}>
                        End Date:{day} Days - {hours} Hours - {minate} Minate
                      </p>
                    ) :
                      (
                        <p key={item.id}>
                          End Date: Expired
                        </p> ) }</h4>
                        <Link href='/detail/[id].js' as={`/detail/${item.id}`}>
                <button id='button-bid' className="w-24 my-2 font-bold text-white bg-yellow-600 rounded hover:bg-yellow-800">Bid Now</button>
                </Link>
                        </div> </div></div> )}):<h2 className='text-xl text-center my-16'>No Matching Items</h2>}
      </>
    )
    
    
        

}