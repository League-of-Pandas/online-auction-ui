import useItems from "../../hooks/useItems";
import Moment from "moment";
import Link from "next/link";

export default function Popular() {
  Moment.locale("en");
  // const [arr,setArr] = useState([])
  const { resources, loading } = useItems();
  if (loading) {
    // console.log(loading);
    return (
      <>
        <h1>LOADING</h1>
      </>
    );
  } else {
    return (
      <div className="bg-white ">
        <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="mb-10 text-2xl font-bold text-center">
            POPULAR AUCTIONS
          </h2>
          <div className="grid h-full grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-6">
            {/* -------- iTEMS -------- */}
            {resources?.map((item) => {
              if (
                item.favorite_counter >= 20 &&
                item.is_sold == false 
              ) {
                let newDate = new Date();
                let dayNow = newDate.getDate(); // Current Day
                let hourNow = newDate.getHours(); // Current Hour
                var dt = item.end_data; // End Date from API
                var day = Moment(dt).format("D");
                day = day - dayNow; // rest of Day
                var hours = Moment(dt).format("H");
                hours = Math.abs(hours - hourNow); // rest of Hour
                return (
                  // <p key={item.id}> {item.item_name}</p>
                  <div key={item.id} className="relative rounded-xl ">
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
                            <a>
                              {item.item_name}
                            </a>
                          </Link>
                        </h3>
                        {/* {console.log(hourNow)} */}
                        {/* 2021-12-18T12:00:00Z*/}
                        <p className="mt-1 text-sm font-semibold text-yellow-600">
                          {" "}
                          {day} Days - {hours} Hours
                        </p>
                        <p className="mt-1 mb-2 text-sm font-bold text-gray-800">
                          {" "}
                          price: ${item.init_price}
                        </p>
                      </div>
                      <div className="flex justify-between">
                          <button className="p-2 mx-2 font-bold bg-indigo-500 rounded-lg text-md text-neutral-100 hover:bg-violet-200 hover:text-black">Add to Favorite</button>
                          <button className="p-2 mx-2 font-bold text-white bg-yellow-600 rounded-lg text-md hover:bg-yellow-200 hover:text-black">Bidding</button>
                      </div> 
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}
