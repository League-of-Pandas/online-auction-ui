import Image from "next/image";
import React, { useEffect } from "react";
import Popular from "./Popular";
import Search from "./Search";
import Vision from "./Vision";
import { useAuth } from "../../contexts/auth";
import useItems from "../../hooks/useItems";

export default function Main() {
  const src = `https://i.ibb.co/pWCTHBT/image.png`;
  const { user } = useAuth()
  const { loading, resources, updateResource } = useItems()
  useEffect(() => {
    if (loading) {
      console.log(loading);
    } else {
      console.log(resources?.[0].end_data);
      
      let dataApi = String(resources?.[0].end_data)

      let yearApi  = dataApi.slice(0,4)
      let monthApi  = dataApi.slice(5,7)
      let dayApi  = parseInt( dataApi.slice(8,10))+1
      let hourApi  = dataApi.slice(11,13)
      let minutesApi  = dataApi.slice(14,16)

      let newDate = new Date()

      let year = newDate.getFullYear();
      let month = newDate.getMonth() + 1;
      let day = newDate.getDate();
      let hour = newDate.getHours()
      let minutes = newDate.getMinutes() 
      if (yearApi <year || monthApi<month || dayApi<day ||(dayApi === day && hourApi<hour ) ||(dayApi === day && hourApi === hour && minutesApi < minutes)) {
        console.log("EXPERTED");
        //  make is_expirated as TRUE
        
      }
      if (yearApi <year || monthApi<month || dayApi<day ||(dayApi === day && hourApi<hour ) ||(dayApi === day && hourApi === hour && minutesApi < minutes) && bidder_counter > 0) {
        console.log("SOLD");
        //  make is_sold as TRUE
        
      }
      
      
      
      console.log(`CURRENT: ${year} ${month} ${day} ${hour} ${minutes} `)
      console.log(`API    : ${yearApi} ${monthApi} ${dayApi} ${hourApi} ${minutesApi} `)

    }
  }, [resources, loading]);

  return (
    <main>

      <img className="top-0 left-0 negative" src="https://cdn.pixabay.com/photo/2018/02/24/20/39/clock-3179167_960_720.jpg" alt="hero" />

      {/* <div>
        <Image loader={() => src} src={src} width={700} height={300} alt="" /> */}
      {/* <img src="https://i.ibb.co/pWCTHBT/image.png" alt="" /> */}
      {/* </div> */}


      <Search />
      <Popular />
      <Vision />
    </main>
  )
}
