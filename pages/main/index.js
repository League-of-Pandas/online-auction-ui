import React, { useEffect } from "react";
import Popular from "./Popular";
import Search from "./Search";
import Vision from "./Vision";
import { useAuth } from "../../contexts/auth";
import useItems from "../../hooks/useItems";

export default function Main() {
  const { user } = useAuth();
  const { loading, resources, updateResource } = useItems();

  // useEffect(() => {
  // handleUpdate()
  // console.log(resources?.[0].end_data);

  // let dataApi = String(resources?.[0].end_data)

  // let yearApi = dataApi.slice(0, 4)
  // let monthApi = dataApi.slice(5, 7)
  // let dayApi = parseInt(dataApi.slice(8, 10)) + 1
  // let hourApi = dataApi.slice(11, 13)
  // let minutesApi = dataApi.slice(14, 16)
  // const time = `${monthApi} ${dayApi}, ${yearApi} ${hourApi}:${minutesApi}`
  // let newDate = new Date()

  // let year = newDate.getFullYear();
  // let month = newDate.getMonth() + 1;
  // let day = newDate.getDate();
  // let hour = newDate.getHours()
  // let minutes = newDate.getMinutes()
  // if (yearApi <year || monthApi<month || dayApi<day ||(dayApi === day && hourApi<hour ) ||(dayApi === day && hourApi === hour && minutesApi < minutes)) {
  //   console.log("EXPERTED");
  //   //  make is_expirated as TRUE

  // }
  // if (yearApi <year || monthApi<month || dayApi<day ||(dayApi === day && hourApi<hour ) ||(dayApi === day && hourApi === hour && minutesApi < minutes) && bidder_counter > 0) {
  //   console.log("SOLD");
  //   //  make is_sold as TRUE

  // }

  // console.log(dataApi);
  // console.log(`CURRENT: ${year} ${month} ${day} ${hour} ${minutes} `)

  // },[loading, resources]);

  return (
    <main>
      <div className="bg-gradient-to-br from-indigo-500 to-yellow-200">
        <div className="container mx-auto">
          <div className="flex items-center justify-between w-full rounded-lg h-96 item-center">
            <div className="">
              <div className="py-4 text-4xl font-black">
                TIME IS RUNNING OUT !
              </div>
              <Search />
              <div className="text-2xl font-black">
                Save on new, used, and hard to find items...
              </div>
            </div>
            <img
              className="transition ease-in-out w-60 h-90 hover:rotate-12"
              src="https://cdn.pixabay.com/photo/2015/11/17/02/18/hourglass-1046841_960_720.png"
              alt="hero"
            />
          </div>
        </div>
      </div>
      <Popular />
      <Vision />
    </main>
  );
}
