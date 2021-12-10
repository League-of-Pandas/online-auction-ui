export default function Search(){
    return(
      <div>
        <form action="/action_page.php">
          {/* <label htmlFor="item">search for item:</label> */}

          {/* <input type="text" id="item" name="item" placeholder="search for item" className="" /> */}
          <div>
            <label htmlFor="item" className="block text-sm font-medium text-gray-700">search for item</label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <input type="text" name="item" id="item" className="block w-full pr-12 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 pl-7 sm:text-sm" placeholder="item" />
            </div>
          </div>
        </form>
      </div>
    
    )
}
