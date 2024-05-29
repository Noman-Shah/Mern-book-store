import React, { useEffect, useState } from 'react'
import FavouriteBookCards1 from './FavouriteBookCards1';

const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {

        fetch('http://localhost:3000/api/all-books')
     .then(res => res.json())
     .then(data => setBooks(data))
    //  .then(books => setBooks(books))

    }, [])

  return (

    <div>
      <FavouriteBookCards1 books= {books} headline = "Other Books" />
    </div>

  )
}

export default OtherBooks