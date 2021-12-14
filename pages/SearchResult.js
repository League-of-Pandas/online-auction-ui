import useResource from "../hooks/useResource1";
import { useState } from "react";
import { useRouter } from 'next/router'

export default function SearchResult(){
    const router = useRouter()
  console.log(router.query);
  let search = Object.values(router.query)[0];

  const CATEGORY_CHOICES = [
    ("All", "All"),
    ("Vehicles", "Vehicles"),
    ("Coins & Bullion", "Coins & Bullion"),
    ("Art", "Art"),
    ("Furniture", "Furniture"),
    ("Electronics", "Electronics"),
    ("Jewelry", "Jewelry"),
  ];

    console.log(typeof(search)); 
    const { resources } = useResource();
    // const [arr, setArr] = useState([]);

        console.log(resources);
        let arr = []
        function handle (){
          for(let i=0; i<resources?.length; i++){
            if(resources[i].item_name.includes(search)){
              console.log(resources[i]);
              arr.push(resources[i])
              console.log(arr);
                return arr;
              
                
          }}}
          let val = handle()
          const [sth, setArr] = useState(val);
          let newArr = []
          async function filter(event) {
            let category = event.target.value;
        
            if (category !== "All") {
              val.filter((item) => {
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
          
          
        

    return(
        <>
        <select className="px-2 text-sm text-gray-700 " name="cars" id="cars" onChange={filter}>
          {CATEGORY_CHOICES.map((category, key) => {
            return (
              <option className="px-4 py-2 text-sm text-gray-700" value={category} key={`${key}`}>
                {category}
              </option>
            );
          })}
        </select>
        <p>hello world</p>
    {sth.length?sth.map(item=>{
        console.log(item);
        return(
        <>
        <img src={item.image} alt='image'/>
        <p>{item.item_name}</p>
        <p>{item.init_price}</p>
        </>)
      }):<p>no matching items</p>}
      </>
    )

}