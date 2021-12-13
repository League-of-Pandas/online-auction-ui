import useResource from "../../hooks/useResource1";
import { useState } from "react";
import {useRouter} from 'next/router'

export default function Search({action = '/Browse'}){
  const router = useRouter()
  const { resources } = useResource();
  const [arr, setArr] = useState([]);
  const [query, setQuery] = useState('any')
  const [isSubmitted, setState] = useState(False)

  const handleParam = setValue => e => setValue(e.target.value)
  console.log(resources);
  let newArr = []
    function handleSearch(event){
      event.preventDefault()
      let search = event.target.search.value;
      console.log(search);
        for(let i=0; i<resources.length; i++){
          if(resources[i].item_name.includes(search)){
            console.log('hello');
            newArr.push(resources[i])
            
          }
        }
        router.push({
          pathname: action,
          query: {q: query},})
        console.log(newArr);
    }
    return(
      <div>
        <form action="/action_page.php" onSubmit={handleSearch}>

          <div>
            <label htmlFor="item" className="block text-sm font-medium text-gray-700">search for item</label>
            <div className="relative mt-1 rounded-md shadow-sm" name='search'>
              <input type="text" name="search" id="item" className="block w-full pr-12 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 pl-7 sm:text-sm" placeholder="item" />
            </div>
          </div>
          <input type="submit" name='q' value={query} onChange={handleParam(setQuery)} onChange={handleParam(setQuery)}/>
          {arr.length?arr.map(item=>{
        return(
        <>
        <img src={item.image} alt='image'/>
        <p>{item.item_name}</p>
        <p>{item.init_price}</p>
        </>)
      }):<p>no matching items</p>}
        </form>

      </div>
    
    )
}
