import Image from "next/image"
import useResource from '../hooks/useResource1';
import { useAuth } from '../contexts/auth';
import axios from 'axios';
import { useState } from 'react'


export default function Browse() {
    
    const { resources } = useResource();
    console.log(resources);


    const [arr, setArr] = useState([]);
     
    const CATEGORY_CHOICES = [
        ("All", 'All'),
        ("Vehicles", 'Vehicles'),
        ("Coins & Bullion", 'Coins & Bullion'),
        ("Art", 'Art'),
        ("Furniture",'Furniture'),
        ("Electronics",'Electronics'),
        ("Jewelry",'Jewelry'),
        ]
        let newArr = [];
        async function filter(event) {
            
            let category = (event.target.value)

            if (category !== "All") {
               await resources.filter((item) => {
                  if (item.category === category){
                        
                      newArr.push(item);
                      
                      
                      
    
                  }
                  setArr(()=>{
                    return newArr
                  })

              })
    
            }
            else {
                setArr(()=>{
                    return resources
                  })
            }
    
          }
        

    return(
        <>
        <div className="px-4 mx-20">
        <label htmlFor="cars">Category</label>
        <select name="cars" id="cars" className="px-4 mx-2" onChange={filter}>
        {CATEGORY_CHOICES.map(category =>{
        return(
            <option value={category}>{category}</option>
        )})}
        
        </select>
        </div>
        {arr?.map((item,key)=>{
            return(
                <>
        <div key={`${key}`} className="flex my-4"> 
            <img alt='resources' src={item.image} width={300} height={300}/>
            <div className="px-4 py-8">
            <h2 className='text-xl '>{item.item_name}</h2>
            <h3>Bids:{item.bidder_counter} | current bid:{item.init_price} $</h3>
            </div>
        </div>
        </>
            )
        }
        )
        }
        </>

    )
}