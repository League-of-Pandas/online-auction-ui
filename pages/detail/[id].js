import axios from 'axios';
import React, { useState } from 'react'
export default function ItemDetail(props) {
    const [timeLeft, setTimeLeft] = useState(null)
    const [itemProps, setItemProps] = useState({})
    let dataApi = String(props.data.end_date)

    let yearApi = dataApi.slice(0, 4)
    let monthApi = dataApi.slice(5, 7)
    let dayApi = parseInt(dataApi.slice(8, 10))
    let hourApi = dataApi.slice(11, 13)
    let minutesApi = dataApi.slice(14, 16)
    const time = `${monthApi} ${dayApi}, ${yearApi} ${hourApi}:${minutesApi}`
    // console.log(time);
    let countDownDate = new Date(time).getTime();
    let x = setInterval(function () {
        let now = new Date().getTime();
        let distance = countDownDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
        if (distance < 0) {
            clearInterval(x);
            setTimeLeft("EXPIRED");
        }

    }, 1000);
    let totelPrice = props.data.init_price
    function handelBidding(e) {
        e.preventDefault()
        let bidding = parseInt( e.target.bidding.value) 
        // totelPrice = props.data.init_price
        totelPrice += bidding
        console.log(totelPrice);
    }
    return (

        <div className='w-screen'>
            <p className='mt-20 text-3xl text-center'>{props.data.item_name}</p>

            <div className='flex content-between w-11/12 m-auto mt-10'>
                <section className='w-8/12'>
                    <img className='object-contain m-auto' src={props.data.image} alt='item'/>
                </section>
                <section className='w-4/12 text-center'>
                    <p>This Auction Ends In:</p>
                    <p>{timeLeft}</p>
                </section>
            </div>

            {/* <p className='w-10/12 m-auto mt-10 mb-3 font-bold'>AUCTION DETAILS</p> */}
            <div className='w-10/12 m-auto text-center bg-stone-300 rounded-2xl'>
                <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Product Details</h3>
                        {/* <p className="max-w-2xl mt-1 text-sm text-gray-500">Personal details and application.</p> */}
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                        <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500"> Name</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">$ {props.data.item_name}</dd>
                            </div>

                            <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Init Price</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">$ {props.data.init_price}</dd>
                            </div>
                            <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500"> Highest Bidding</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">$ {props.data.highest_bidding}</dd>
                            </div>
                            <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Description</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{props.data.description}
                                </dd>
                            </div>
                            <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                {/* <dt className="text-sm font-medium text-gray-500"></dt> */}
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <ul role="list" className="border border-gray-200 divide-y divide-gray-200 rounded-md">
                                        <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                            <form onChange={handelBidding} className="font-medium text-indigo-600 hover:text-indigo-500">
                                            <div className="flex items-center flex-1 w-0">
                                                
                                                <input type="number" name="bidding" min={props.data.bid_increment} className="font-medium text-indigo-600 hover:text-indigo-500" />
                                            </div>
                                            <div className="flex-shrink-0 ml-4">
                                                <button  className="font-medium text-indigo-600 hover:text-indigo-500">
                                                    Bidding
                                                </button>
                                                
                                            </div>
                                            </form>
                                        </li>
                                        
                                    </ul>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}



export async function getServerSideProps(context) {
    const context_id = context.query.id
    const response = await axios.get("http://127.0.0.1:8002/api/v1/items/" + context_id);

    // console.log("getServerSideProps", response.data)
    // console.log(context.query);
    const data = response.data
    return {
        props: {
            data: data

        }
    }

}