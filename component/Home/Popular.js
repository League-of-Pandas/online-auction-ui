import useItems from "../../hooks/useItems";
import Moment from "moment";
import Link from "next/link";
import AddFav from "./AddFav";
import { useState, useEffect } from "react";


export default function Popular() {
  Moment.locale("en");
  const [results, setResults] = useState([])
  const { resources, loading, updateResource } = useItems();

  function handleWinner() {
    results?.map((item) => {
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
      

      if (
        (item.is_sold == false &&
          ((yearApi <= year || monthApi <= month || dayApi <= day)
            &&
            (dayApi <= day && hourApi <= hour)
            &&
            (dayApi <= day && hourApi <= hour && minutesApi <= minutes)
          )
        )
      ) {
        const itemBody = {

          is_sold: true,

        }
        updateResource(itemBody, item.id)
      } 
    })
  }
  handleWinner()
  useEffect(() => {
    setResults(resources)

  }, [resources])
  
  if (loading) {
    return (
      <div className="container mx-auto bg-white ">
        <div className="max-w-2xl py-16 my-10 sm:py-24 sm:px-6 lg:max-w-7xl">
          <h2 className="my-10 mt-8 text-2xl font-bold text-center">
            POPULAR AUCTIONS
          </h2>
          <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div className="relative rounded-xl">
              <img
                src="/loading-gif.gif"
                alt="LOADING"
                className="w-full h-48 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container w-full mx-auto bg-white">
        <h2 className="mb-10 text-2xl font-bold text-center ">
          POPULAR AUCTIONS
        </h2>
        <div className="grid h-full grid-cols-1 mx-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-6">
          {/* -------- iTEMS -------- */}
          {results?.map((item) => {
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
            if (
              item.favorite_counter >= 20 &&
              item.is_sold == false && (
                yearApi <= year ||
                monthApi <= month ||
                dayApi <= day ||
                (dayApi === day && hourApi <= hour) ||
                (dayApi <= day && hourApi <= hour && minutesApi <= minutes)
              )
            ) {
              return (
                <div key={item.id} className="relative rounded-xl md:mx-4">
                  <div className="">
                    <img
                      src={item.image}
                      alt={item.item_name}
                      className="w-full h-48 rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-around pb-4 pl-2 mt-4 rounded-lg shadow-xl">
                    <div className="h-full ">
                      <h3 className="text-sm ">
                        <Link
                          href="/detail/[id]"
                          as={`/detail/${item.id}`}
                        >
                          <a id='item-name'>
                            {item.item_name}
                          </a>
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-yellow-600">
                        {" "}
                        {totalDay} Days - {totalHour} Hours
                      </p>
                      <p className="mt-1 mb-2 text-sm font-bold text-gray-800">
                        {" "}
                        price: ${item.highest_bidding}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <AddFav item={item} />
                      <Link
                        href="/detail/[id]"
                        as={`/detail/${item.id}`}
                      >
                        <button className="p-2 mx-2 font-bold text-white bg-indigo-600 rounded-lg text-md hover:bg-indigo-200 hover:text-black">
                          Bidding
                        </button>
                      </Link>

                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}
