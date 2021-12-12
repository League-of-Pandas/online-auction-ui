import useItems from "../../hooks/useItems";
import Moment from 'moment';

export default function Popular() {
  Moment.locale('en');
  // const [arr,setArr] = useState([])
  const { resources, loading } = useItems()
  if (loading) {
    // console.log(loading);
    return (
      <>
      <h1>LOADING</h1>
      </>
    )
  } else {

    // console.log(resources)

    return (

      <div>
        <div className="bg-white">
          <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">POPULAR AUCTIONS</h2>

            <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {/* -------- iTEMS -------- */}
              {
                resources?.map((item) => {
                  if (item.favorite_counter >= 20 && item.is_sold == false && item.is_expirated == false) {
                    let newDate = new Date()
                    let dayNow = newDate.getDate()      // Current Day
                    let hourNow = newDate.getHours()    // Current Hour
                    var dt = item.end_data;             // End Date from API
                    var day = Moment(dt).format('D')
                    day = day - dayNow                  // rest of Day
                    var hours = Moment(dt).format('H')
                    hours = Math.abs(hours - hourNow)   // rest of Hour
                    return (
                      // <p key={item.id}> {item.item_name}</p>
                      <div key={item.id} className="relative ">
                        <div className="w-full overflow-hidden bg-gray-200 rounded-md min-h-80 aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:h-80 lg:aspect-none">
                          <img src={item.image} alt={item.item_name} className="object-cover object-center w-full h-full lg:w-full lg:h-full" />
                        </div>
                        <div className="flex justify-between mt-4">
                          <div>
                            <h3 className="text-sm text-gray-700">
                              <a href="#">
                                <span aria-hidden="true" className="absolute inset-0"></span>
                                {item.item_name}
                              </a>
                            </h3>
                            {
                              console.log(hourNow)
                            }
                            {/* 2021-12-18T12:00:00Z*/}

                            <p className="mt-1 text-sm text-gray-500"> {day} Days - {hours} Hours</p>
                            <p className="mt-1 text-sm text-gray-500"> ${item.init_price}</p>
                          </div>

                        </div>
                      </div>
                    )
                  }
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }

}
