import axios from "axios";
import { useEffect, useState } from "react";
import Removewishlist from "./removewishlist";

export default function Wishlist() {
    
    const [ wishlist, setWishlist ] = useState();
  
    useEffect(() => {
      async function fetchWishlist () {
        try{
          const response = await axios({
            url: "/wishlist",
            method: "get",
            headers: {
              "Authorization": localStorage.getItem('jwt_token')
            },
          })
          if(response.status === 200) {
            setWishlist(response.data);
          }

        } catch (error) {
          console.log(error);
        }
      }

      fetchWishlist();
    }, [])

  return(
        <>
        <h2>Wishlist</h2>
        {!wishlist ? <h1>your havent add any ithems in wishlist</h1> : 
        <div> 
          <p>{wishlist.userID}</p>
          <h2>Items in the wishlist:</h2>
          <ul>
              {wishlist.items && wishlist.items.length > 0 ? (
                wishlist.items.map((wish, index) => (
                  <>
                  <li key={index}>{wish}</li>
                  <Removewishlist id={wish} />
                  </>
                ))
              ) : (
                <p>ther is no items in wishlist</p>
              )}
          </ul>
          </div>
        }
        </>
    );
}