import { useState } from "react";
import useItems from "../hooks/useItems";
import Link from "next/link";


export default function Browse() {
  const { loading, resources } = useItems();
  const [arr, setArr] = useState(resources);
  const CATEGORY_CHOICES = [
    ("All", "All"),
    ("Vehicles", "Vehicles"),
    ("Coins & Bullion", "Coins & Bullion"),
    ("Art", "Art"),
    ("Furniture", "Furniture"),
    ("Electronics", "Electronics"),
    ("Jewelry", "Jewelry"),
  ];

  let newArr = [];

  async function filter(event) {
    let category = event.target.value;
    if (loading) {
      console.log(loading);
    } else {

      if (category !== "All") {
        await resources?.filter((item) => {
          if (item.category === category) {
            newArr.push(item);
          }
          setArr(() => {
            return newArr;
          });
        });
      } else {
        setArr(() => {
          return resources;
        });
      }
    }
  }
  return (
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
      {
        arr?.map((item, key) => {
          let dataApi = String(item.end_date)
          let yearApi = dataApi.slice(0, 4)
          let monthApi = dataApi.slice(5, 7)
          let dayApi = parseInt(dataApi.slice(8, 10))
          let hourApi = dataApi.slice(11, 13)
          let minutesApi = dataApi.slice(14, 16)
          const time = `${monthApi} ${dayApi}, ${yearApi} ${hourApi}:${minutesApi}`
          let countDownDate = new Date(time).getTime();
          let now = new Date().getTime();
          let distance = countDownDate - now;
          let days = Math.floor(distance / (1000 * 60 * 60 * 24));
          let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          let newDate = new Date()
          let nowyear = newDate.getFullYear();
          let nowmonth = newDate.getMonth() +1;
          let nowday = newDate.getDate();
          let nowhour = newDate.getHours()
          let nowminutes = newDate.getMinutes()

          // let dataApi = String(item.end_date)
          // let yearApi = dataApi.slice(0, 4)
          // let monthApi = dataApi.slice(5, 7) 
          // let dayApi = parseInt(dataApi.slice(8, 10))
          // let hourApi = dataApi.slice(11, 13)
          // let minutesApi = dataApi.slice(14, 16)

          // console.log("--------------------------");
          // console.log(item.item_name);
          // console.log("year API ", yearApi, "-"," NOW", nowyear);
          // console.log("month API ", monthApi, "-"," NOW ", nowmonth);
          // console.log("day API ", dayApi, "-"," NOW ", nowday);
          // console.log("hour API ", hourApi, "-"," NOW ", nowhour);
          // console.log("minutes API ", minutesApi, "-"," NOW ", nowminutes);
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
                  <Link href='/detail/[id].js' as={`/detail/${item.id}`}>
                    <a className="font-bold">{item.item_name}</a>
                  </Link>
                  <h4 className="text-sm">
                    Bids:{item.bidder_counter}
                  </h4>
                  <h4 className="text-sm">
                    current bid:{item.init_price} $
                  </h4>
                  <h4 className="text-sm">
                    {
                     
                      (item.is_sold == false && (
                        (yearApi ==nowyear )&& (monthApi ==nowmonth) && (dayApi ==nowday )&& (hourApi ==nowhour ) && (minutesApi > nowminutes ) ||
                        (yearApi ==nowyear )&& (monthApi ==nowmonth) && (dayApi ==nowday )&& (hourApi >nowhour ) ||
                        (yearApi ==nowyear )&& (monthApi ==nowmonth) && (dayApi > nowday ) ||
                        (yearApi ==nowyear )&& (monthApi > nowmonth) ||
                        (yearApi >nowyear )
                        
                        )
                      ) ? (
                        <p key={item.id}>
                          End Date:{days} Days - {hours} Hours - {minutes} Minate
                        </p>
                      ) :
                        (
                          <p key={item.id}>
                            {(item.is_sold) ? ("SOLD") : ("End Date Expirated")}
                          </p>
                        )
                    }
                  </h4>
                  {(item.is_sold == false && (
                        (yearApi ==nowyear )&& (monthApi ==nowmonth) && (dayApi ==nowday )&& (hourApi ==nowhour ) && (minutesApi > nowminutes ) ||
                        (yearApi ==nowyear )&& (monthApi ==nowmonth) && (dayApi ==nowday )&& (hourApi >nowhour ) ||
                        (yearApi ==nowyear )&& (monthApi ==nowmonth) && (dayApi > nowday ) ||
                        (yearApi ==nowyear )&& (monthApi > nowmonth) ||
                        (yearApi >nowyear )
                        
                        )) ? (<Link href='/detail/[id].js' as={`/detail/${item.id}`}>
                        <button id="bid-browse" className="w-24 my-2 font-bold text-white bg-yellow-600 rounded hover:bg-yellow-800">Bid Now</button>
                      </Link>) : (<></>
                    
                  )}
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}
