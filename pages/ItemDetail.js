import axios from 'axios';
import React, { useState } from 'react'
export default function ItemDetail() {
  const [timeLeft,setTimeLeft] = useState(null)
  const [itemProps,setItemProps] = useState({})
  // axios.get()
  let countDownDate = new Date("1 5, 2022 15:37").getTime();
  let x = setInterval(function() {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  setTimeLeft(days + "d " + hours + "h "+ minutes + "m " + seconds + "s ");
  if (distance < 0) {
      clearInterval(x);
      setTimeLeft("EXPIRED");
    }

}, 1000);
  return (
    <div className='w-screen'>
      <p className='mt-20 text-3xl text-center'>Item Name</p>
      
      <div className='flex content-between w-11/12 m-auto mt-10'>
        <section className='w-8/12'>
          <img className='object-contain m-auto' src='https://images.samsung.com/au/galaxy-watch4/feature/galaxy-watch4-silver-better-sleep.png' alt='item'/>
        </section>
        <section className='w-4/12 text-center'>
          <p>This Auction Ends In:</p>
          <p>{timeLeft}</p>
          <p>three</p>
          <p>four</p>
        </section>
      </div>

      <p className='w-10/12 m-auto mt-10 mb-3 font-bold'>AUCTION DETAILS</p>
      <div className='w-10/12 m-auto text-center bg-stone-300 rounded-2xl'>
        <p className='mt-10'>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>tetydst</p>
        <p className='mb-10'>tetydst</p>
      </div>
    </div>
  )
}



