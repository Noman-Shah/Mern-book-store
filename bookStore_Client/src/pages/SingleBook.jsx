import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
    const { _id, bookTitle, imageURL, authorName,category,bookDescription } = useLoaderData();
  return (
    <div className=' mt-28 px-4 lg:px-24'>
        <img src={imageURL} alt="" />
        <h2 className=' text-lg font-bold mt-4'>{bookTitle}</h2>
        <p>{authorName}</p>
        <p>{category}</p>
        <p className=' w-96'>{bookDescription}</p>
         </div>
  )
}

export default SingleBook