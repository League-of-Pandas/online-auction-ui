/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
// import useResource from "../hooks/useResource1";
import { useAuth } from "../contexts/auth";
import axios from "axios";
import { useState } from "react";
import useItems from "../hooks/useItems";
import Moment from 'moment';
import Link from "next/link";


export default function Browse() {
  const { loading, resources } = useItems();
  // console.log(resources);
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
      {arr?.map((item, key) => {
        let newDate = new Date()
        let year = newDate.getFullYear();
        let month = newDate.getMonth() + 1;
        let day = newDate.getDate();
        let hour = newDate.getHours()
        let minutes = newDate.getMinutes()

        let dataApi = String(item.end_date)
        let yearApi = dataApi.slice(0, 4)
        let monthApi = dataApi.slice(5, 7)
        let dayApi = parseInt(dataApi.slice(8, 10))
        let totalDay = Math.abs(dayApi - day)
        let hourApi = dataApi.slice(11, 13)
        let totalHour = Math.abs(hourApi - hour)
        let minutesApi = dataApi.slice(14, 16)
        let totalminute = Math.abs(minutesApi - minutes)

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
                    (item.is_sold == false && (
                      yearApi <= year ||
                      monthApi <= month ||
                      dayApi <= day ||
                      (dayApi === day && hourApi <= hour) ||
                      (dayApi <= day && hourApi <= hour && minutesApi <= minutes)
                    )) ? (
                      <p key={item.id}>
                        End Date:{totalDay} Days - {totalHour} Hours - {totalminute} Minate
                      </p>
                    ) :
                      (
                        <p key={item.id}>
                          End Date: expirated
                        </p>
                      )
                  }
                  {/* End Date:{day} Days - {hours} Hours */}
                </h4>
                <Link href='/detail/[id].js' as={`/detail/${item.id}`}>
                  <button className="w-24 my-2 font-bold text-white bg-yellow-600 rounded hover:bg-yellow-800">Bid Now</button>
                </Link>
              </div>
            </div>
          </div>

        );
      })}
    </>
  );
}
