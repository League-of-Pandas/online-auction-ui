/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
// import useResource from "../hooks/useResource1";
import { useAuth } from "../contexts/auth";
import axios from "axios";
import { useState } from "react";
import useItems from "../hooks/useItems";
import Moment from 'moment';


export default function Browse() {
  const { loading, resources } = useItems();
  // console.log(resources);
  const [arr, setArr] = useState([]);

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
                          End Date: expirated
                        </p>
                      )
                  }
                  {/* End Date:{day} Days - {hours} Hours */}
                </h4>
                <button className="w-24 my-2 font-bold text-white bg-yellow-600 rounded hover:bg-yellow-800">Bid Now</button>
              </div>
            </div>
          </div>

        );
      })}
    </>
  );
}
