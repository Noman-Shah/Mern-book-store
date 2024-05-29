import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";

const EditBook = () => {
  const {id} = useParams();
  const {bookTitle, authorName,imageURL, category, bookDescription, bookPDFURL} = useLoaderData();

  const bookCategories = [
    'Fiction',
    'Non-fiction',
    'Science Fiction',
    'Mystery',
    'Fantasy',
    'Biography',
    'History',
    'Self-Help',
    'Romance',
    'Thriller'
  ];
  const [selBookCategory, setSelBookCategory] = useState(bookCategories[0]);

  const categoryChange = (e) => {
    setSelBookCategory(e.target.value);
  }

  /* Form Submission */
  const updatedBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const bookDescription = form.bookDescription.value;
    const imageURL = form.imageURL.value;
    const bookPdfUrl = form.bookPDFURL.value;
    const category = form.categoryName.value;

    const updateBookObj = {
      bookTitle, authorName, imageURL, category, bookDescription, bookPdfUrl
    }
    console.log(updateBookObj);

    /* Update book data to the Database. */
    fetch(`http://localhost:3000/api/book/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateBookObj)
    })
     .then(res => res.json())
     .then(data => {
        console.log(data);
        alert("Book is updated Successfully!!!");
        form.reset();
      })
     .catch(err => console.error('Error:', err));
  }

  return (
    <div className=" px-4 my-12">
      <h2 className=' mb-8 text-3xl font-bold'>Edit The Book Data </h2>

      <form onSubmit={updatedBook} className="flex lg:w-[1180px] flex-wrap flex-col gap-4">

        {/* First Row */}
        <div className=" flex gap-4">
          {/* bookTitle */}
            <div className=" lg:w-1/2">
            <div className="mb-2 block">
              <Label 
                  htmlFor="bookTitle" 
                  value="Book Title" 
              />
            </div>
            <TextInput 
                  id="bookTitle" 
                  type="bookTitle" 
                  placeholder="Complete Code ....." 
                  name="bookTitle"
                  defaultValue={bookTitle}
                  required 
            />
          </div>
            {/* authername */}
            <div className=" lg:w-1/2">
            <div className="mb-2 block">
              <Label 
                  htmlFor="authorName" 
                  value="Author Name" 
              />
            </div>
            <TextInput 
                  id="authorName" 
                  type="authorName" 
                  placeholder="John Wick...." 
                  name="authorName"
                  defaultValue={authorName}
                  required 
            />
          </div>

        </div>

        {/* Second Row */}
        <div className=" flex gap-4">
          {/* imageURL */}
            <div className=" lg:w-1/2">
            <div className="mb-2 block">
              <Label 
                  htmlFor="imageURL" 
                  value="Book Image Url" 
              />
            </div>
            <TextInput 
                  id="imageURL" 
                  type="text" 
                  placeholder="Book Image Url ....." 
                  name="imageURL"
                  defaultValue={imageURL}
                  required 
            />
          </div>
            {/* category */}
            <div className=" lg:w-1/2">
            <div className="mb-2 block">
              <Label 
                  htmlFor="inputState" 
                  value="Book Category" 
              />
            </div>
            <select name="categoryName" id="inputState" className=" w-full rounded" value={selBookCategory} onChange={categoryChange}>
              {
                bookCategories.map((category) => (
                  <option key={category} defaultValue={category} value={category}>{category}</option>))
              }
            </select>
          </div>

        </div>

        {/* Third Row */}
        <div>
          {/* bookDescription */}
            <div className="mb-2 block">
              <Label 
                  htmlFor="bookDescription" 
                  value="Book Description" 
              />
            </div>
            <Textarea
                  id="bookDescription" 
                  placeholder="Write your book description ....." 
                  name="bookDescription"
                  required 
                  rows={5}
                  defaultValue={bookDescription}
                  className="w-full"
            />
          </div>

        {/* fourth row */}
        <div> 
          <div className="mb-2 block">
            <Label 
                htmlFor="bookPDFURL" 
                value="Book PDF Url" 
            />

          </div>
          <TextInput 
              id="bookPDFURL" 
              type="text" 
              placeholder="Complete book Pdf Url" 
              name="bookPDFURL"
              required
              defaultValue={bookPDFURL}
              className="w-full"
          />
        </div>
        <Button type="submit">
          Update Book Details
        </Button>

          
    </form>
      
    </div>
  )
}

export default EditBook

