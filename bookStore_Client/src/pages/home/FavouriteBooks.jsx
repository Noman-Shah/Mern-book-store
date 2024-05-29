import { useEffect, useState } from "react"

// import required modules
import FavouriteBookCards1 from "./FavouriteBookCards1";



const FavouriteBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {

        fetch('http://localhost:3000/api/all-books')
     .then(res => res.json())
     .then(data => setBooks(data))
    //  .then(books => setBooks(books))

    }, [])

  return (

    <div>
      <FavouriteBookCards1 books= {books} headline = "Best Seller Books" />
    </div>

  )
}

export default FavouriteBooks