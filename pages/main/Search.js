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


            
       <form action={action} onSubmit={routing} className="flex m-2 justify-around">
            <div className="relative rounded-md shadow-sm">
              <input type="text" name="search" id="item" className="w-full p-2 my-2 text-lg rounded-lg" placeholder="Search for lots ..." required />
            </div>
            <button type="submit" name='q' value={query} className="px-4 py-2 font-bold text-white bg-yellow-500 border border-yellow-500 rounded hover:bg-yellow-700 w-15 h-15">Go</button>
        </form>
    
    
    
    )
}
