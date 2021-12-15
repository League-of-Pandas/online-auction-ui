import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useAuth } from '../../contexts/auth';
import useBidding from '../../hooks/useBidding';
import useItems from '../../hooks/useItems';
const ItemDetail = (props) => {
    const { user } = useAuth()
    const [itemProps, setItemProps] = useState({})
    const [userDetail, setUserDetail] = useState({})

    const [timeLeft, setTimeLeft] = useState(null);

    function handleTimer() {
        let dataApi = String(props.data.end_date)
        let yearApi = dataApi.slice(0, 4)
        let monthApi = dataApi.slice(5, 7)
        let dayApi = parseInt(dataApi.slice(8, 10))
        let hourApi = dataApi.slice(11, 13)
        let minutesApi = dataApi.slice(14, 16)
        const time = `${monthApi} ${dayApi}, ${yearApi} ${hourApi}:${minutesApi}`
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

        }, 100);
    }
    function handleUserDetail() {
        const apiUrl = process.env.NEXT_PUBLIC_RESOURCE_URLS + props.data.owner + "/"

        axios.get(apiUrl).then((response) => {
            setUserDetail(response.data)
        })
    }

    const apiUrl = process.env.NEXT_PUBLIC_RESOURCE_URL_ITEMS + props.data.id + "/"
    handleTimer()
    useEffect(() => {
        axios.get(apiUrl).then((response) => {
            setItemProps(response.data)
        })
        handleUserDetail()
    }, [itemProps])

    const { updateResource } = useItems()
    const { createResource } = useBidding()


    let totelPrice = itemProps.highest_bidding
    function handelBidding(e) {
        e.preventDefault()
        let bidding = parseInt(e.target.bidding.value)
        totelPrice += bidding
        const url = process.env.NEXT_PUBLIC_RESOURCE_URL_ITEMS + itemProps.id + "/";
        let body = {
            highest_bidding: totelPrice,
            bidder_counter: itemProps.bidder_counter + 1,
        }
        const biddingBody = {
            user: user.id,
            product: itemProps.id,
        }
        createResource(biddingBody)
        updateResource(body, itemProps.id)
    }

    return (

        <div className='w-screen'>
            <p className='mt-20 text-3xl text-center'>{itemProps.item_name}</p>

            <div className='flex justify-around w-11/12 p-4 m-auto mt-10 border-2 rounded-lg'>
                <section className=''>
                    <img className='object-contain m-auto border-2 rounded-lg shadow-lg' src={itemProps.image} alt='item' />
                </section>
                <section className='justify-between text-center'>
                    <div>
                        <p className='text-gray-600'>This Auction Ends In:</p>
                        <p className='text-gray-600'>{timeLeft}</p>
                    </div>
                    <div>
                        {
                            (user) ? (
                                ((user.id === itemProps.owner)) ? (
                                    <>
                                        <div className="flex flex-col items-center flex-1 w-full p-2">
                                            <div className="w-full p-2 font-black text-indigo-600">Totle Price </div>
                                            <div className="p-2 font-medium text-indigo-600 border-2 border-indigo-500 rounded-lg hover:text-indigo-500" >
                                                {itemProps.highest_bidding}
                                            </div>
                                            <div className="w-full p-2 font-black text-indigo-600">Counter Bidders </div>
                                            <div className="p-2 font-medium text-indigo-600 border-2 border-indigo-500 rounded-lg hover:text-indigo-500" >
                                                {itemProps.bidder_counter}
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 ml-4">
                                            <button type='submit' className="font-medium text-indigo-600 hover:text-indigo-500" disabled>
                                                {(itemProps.is_sold) ? ("SOLD") : ("Bidding")}
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <form onSubmit={(e) => handelBidding(e)} className="font-medium text-indigo-600 hover:text-indigo-500">
                                            <div className="flex flex-col items-center flex-1 w-full p-2">
                                            {(itemProps.is_sold) ? ("") : (<>
                                                
                                                <input required type="number" name="bidding" min={itemProps.bid_increment} placeholder={itemProps.bid_increment} className="p-2 font-medium text-indigo-600 border-2 border-indigo-500 rounded-lg hover:text-indigo-500" />
                                            </>
                                            )}
                                            </div>
                                            <div className="flex-shrink-0 ml-4">
                                                {(itemProps.is_sold) ? ("SOLD") : (<>
                                                <button type='submit' id='submit-bid' className="font-medium text-indigo-600 hover:text-indigo-500">
                                                    {(itemProps.is_sold) ? ("SOLD") : ("Bidding")}
                                                </button>
                                                
                                                </>)}
                                            </div>
                                        </form>
                                    </>
                                )



                            ) :
                                (
                                    <>
                                        {/* className="font-medium text-indigo-600 hover:text-indigo-500" */}
                                        <form onSubmit={(e) => handelBidding(e)} className="font-medium text-indigo-600 hover:text-indigo-500">
                                            <div className="flex flex-col items-center flex-1 w-full p-2">
                                                <label className="w-full p-2 font-black text-indigo-600">{(itemProps.is_sold) ? ("") : ("To Bid on Product Please Login")}</label>
                                                {(itemProps.is_sold) ? ("") : (<>
                                                
                                                    <input required type="number" name="bidding" min={itemProps.bid_increment} placeholder={itemProps.bid_increment} className="p-2 font-medium text-indigo-600 border-2 border-indigo-500 rounded-lg hover:text-indigo-500" />
                                                </>
                                                )}
                                            </div>
                                            <div className="flex-shrink-0 ml-4">
                                            {(itemProps.is_sold) ? ("SOLD") : (<>
                                                <button type='submit' id='submit-bid' className="font-medium text-indigo-600 hover:text-indigo-500">
                                                    {(itemProps.is_sold) ? ("SOLD") : ("Bidding")}
                                                </button>
                                                
                                                </>)}

                                            </div>
                                        </form>
                                    </>
                                )
                        }
                    </div>


                </section>
            </div>


            <div id='item-details' className='w-10/12 m-auto text-center bg-stone-300 rounded-2xl'>
                <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Product Details</h3>
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500"> Name</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"> {itemProps.item_name}</dd>
                            </div>

                            <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Init Price</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">$ {itemProps.init_price}</dd>
                            </div>
                            <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500"> Highest Bidding</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">$ {itemProps.highest_bidding}</dd>
                            </div>
                            <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Description</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{itemProps.description}
                                </dd>
                            </div>
                            <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500"> Bid Increment</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">$ {itemProps.bid_increment}</dd>
                            </div>
                            <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Bidder Counter</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{itemProps.bidder_counter}
                                </dd>
                            </div>
                            <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500"> Owner</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"> {userDetail.username}</dd>
                            </div>

                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail


export async function getServerSideProps(context) {
    const context_id = context.query.id
    const response = await axios.get(process.env.NEXT_PUBLIC_RESOURCE_URL_ITEMS + context_id);
    const data = response.data
    return {
        props: {
            data: data

        }
    }

}