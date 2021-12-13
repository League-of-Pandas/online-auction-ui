export default function Search(){
    return(
      <div>
        <form action="/action_page.php">
            <div className="relative rounded-md shadow-sm">
              <input type="text" name="item" id="item" className="w-full p-2 my-2 text-lg rounded-lg" placeholder="Search for lots ..." />
            </div>
        </form>
      </div>
    )
}
