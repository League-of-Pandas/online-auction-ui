import { useState } from "react";
import {useRouter} from 'next/router';


export default function Search({action='/SearchResult'}){

  const router = useRouter()
  const [query, setQuery] = useState('')

function routing(e){
      e.preventDefault()
      console.log(action)
      console.log(query)
      router.push({
          pathname: action,
          query: {q: e.target.search.value},})
    }
    return(           
       <form action={action} onSubmit={routing} className="flex flex-col justify-around m-2 ">
            <div className="flex justify-between mx-4 text-sm font-bold text-gray-600 rounded-md shadow-sm ">
              <input type="text" name="search" id="item" className="w-full h-full p-4 mr-4 text-sm rounded-lg focus:outline-none" placeholder="Search for lots ..." required />
              <button type="submit" name='q' value={query} className="p-2 bg-white border-2 rounded-lg focus:outline-none hover:border-indigo-600 hover:text-indigo-600">search</button>
            </div>
        </form>    
    )
}
