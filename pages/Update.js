/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
// import useResource from "../hooks/useResource1";
import { useAuth } from "../contexts/auth";
import axios from "axios";
import { useState } from "react";
import useItems from "../hooks/useItems";
import { useEffect } from "react/cjs/react.development";


export default function Update() {
  const { loading, resources, updateResource } = useItems();
  // const [item, setItem] = useState([])
  // Get Current Data
  let newDate = new Date()
  let year = newDate.getFullYear();
  let month = newDate.getMonth() + 1;
  let day = newDate.getDate();
  let hour = newDate.getHours()
  let minutes = newDate.getMinutes()
  function handleUpdate() {
    if (loading) {
      console.log(loading);
    } else {
      resources?.map((item) => {
        // console.log(item);
        // Get item end date
        let dataApi = String(item.end_date)
        let yearApi = dataApi.slice(0, 4)
        let monthApi = dataApi.slice(5, 7)
        let dayApi = parseInt(dataApi.slice(8, 10))
        let hourApi = dataApi.slice(11, 13)
        let minutesApi = dataApi.slice(14, 16)
        const time = `${monthApi} ${dayApi}, ${yearApi} ${hourApi}:${minutesApi}`
        console.log("year", yearApi, "-", year);
        console.log("month", monthApi, "-", month);
        console.log("day", dayApi, "-", day);
        console.log("hour", hourApi, "-", hour);
        console.log("minutes", minutesApi, "-", minutes);


        if (
          (
            yearApi < year ||
            monthApi < month ||
            dayApi < day ||
            (dayApi === day && hourApi < hour) ||
            (dayApi <= day && hourApi <= hour && minutesApi < minutes)
          )
          &&
          item.is_expirated == false
        ) {
          // console.log(item);
          console.log(minutesApi, " ", minutes);
          const newItem = {
            // id: 12,
            item_name: item.item_name,
            image: item.image,
            category: item.category,
            description: item.description,
            init_price: item.init_price,
            highest_bidding: item.highest_bidding,
            bid_increment: item.bid_increment,
            start_date: item.start_date,
            end_date: item.end_date,
            bidder_counter: item.bidder_counter,
            favorite_counter: item.favorite_counter,
            is_sold: item.is_sold,
            is_expirated: true,
            // owner: item.owner,
            // bidder: item.bidder
          }
          console.log(newItem);
          // setItem(newItem)
          updateResource(newItem, item.id)
          // console.log(item);

        }


        return (
          <></>
          // console.log(time)


        )
      })

    }

  }


  // function update() {
  //   updateResource(newItem, 12)
  // }


  // useEffect(() => {
  //   console.log("useEffect");
  //   updateResource(item[0], item.id)
  // }, [item])
  return (
    <>
      <button onClick={handleUpdate}>Update </button>
    </>
  );
}

// const newItem = {
//   // id: 12,
//   item_name: "1882 $1 MORGAN SILVER DOLLARDOLLAR",
//   image: "https://i.ebayimg.com/thumbs/images/g/I18AAOSw~9xhs-Pu/s-l225.jpg",
//   category: "Coins & Bullion",
//   description: "1882 $1 MORGAN SILVER DOLLAR\r\n1882 $1 MORGAN SILVER DOLLAR",
//   init_price: 60,
//   highest_bidding: 0,
//   bid_increment: 0,
//   start_data: "2021-12-11T17:40:19Z",
//   end_data: "2021-12-11T17:40:19Z",
//   bidder_counter: 0,
//   favorite_counter: 0,
//   is_sold: true,
//   is_expirated: true,
//   owner: 5,
//   bidder: 9
// }
// // console.log(newItem);
// function update() {
//   updateResource(newItem, 12)
// }