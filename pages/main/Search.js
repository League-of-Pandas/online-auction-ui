import useResource from "../../hooks/useResource1";
import { useState } from "react";
import {useRouter} from 'next/router';
import SearchResult from "../SearchResult";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { result } from "cypress/types/lodash";

// export const arr= []
// export handleEvent
// let arr = []
// export  const handleEvent
export default function Search({action='/SearchResult'}){

  const router = useRouter()
  const [query, setQuery] = useState('search')
  const [isSubmitted, setState] = useState(false)
  // const [value,setStr] = useState('')
  // setStr((result)=>[...result,value])
  let arr = []
  //  function handleEvent (event) {
  //    event.preventDefault()
  //    let val = event.target.search.value
  //    console.log(val);
  //   return val
  // }
  // let result = handleEvent()
  // console.log(result);
  
  const handleParam = setValue => e => setValue(e.target.value)
  // console.log(resources);
 
    function handleEvent(event){
      event.preventDefault()
      let val = event.target.search.value
     console.log(val);
      // SearchResult(val)
        // router.push({
        //   pathname: action,
        //   query: {q: query},})
    }

    function routing(e){
      e.preventDefault()
      console.log(action)
      console.log(query)
      router.push({
          pathname: action,
          query: {q: e.target.search.value},})
    }
    return(
      // <Router>
      //   <Switch>
      //    <Route path="/SearchResult/" component={SearchResult} />
      //    </Switch>
      // </Router>,
      <div>
        {/* {handleEvent} */}
        <form action={action} onSubmit={routing}>

          <div>
            <label htmlFor="item" className="block text-sm font-medium text-gray-700">search for item</label>
            <div className="relative mt-1 rounded-md shadow-sm" name='search'>
              <input type="text" name="search" id="item" className="block w-full pr-12 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 pl-7 sm:text-sm" placeholder="item" />
            </div>
          </div>
          <input type="submit" name='q' value={query}  />
          {/* {arr.length?arr.map(item=>{
        return(
        <>
        <img src={item.image} alt='image'/>
        <p>{item.item_name}</p>
        <p>{item.init_price}</p>
        </>)
      }):<p>no matching items</p>} */}
        </form>

      </div>
    
    
    )
}

// export const searchValue = handleEvent()
