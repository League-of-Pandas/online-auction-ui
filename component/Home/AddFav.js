import useItems from "../../hooks/useItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function AddFav({item}) {
    const { updateResource } = useItems()

    function handelFavorite() {
        console.log(item)
        const itemBody = {
            favorite_counter: item.favorite_counter + 1,
        };
        updateResource(itemBody, item.id)



    }
    return(
        // <>
        <FontAwesomeIcon onClick={handelFavorite} icon={faStar} className="cursor-pointer margin hover:text-yellow-400 w-36"></FontAwesomeIcon>
        
        // <button onClick={handelFavorite} className="p-2 mx-2 font-bold bg-indigo-500 rounded-lg text-md text-neutral-100 hover:bg-violet-200 hover:text-black">Add to Favorite</button>

    )
}


