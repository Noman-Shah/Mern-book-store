import React from 'react'
import pic2 from "../../assets/profile1.png"
import pic3 from "../../assets/profile2.png"
import { FaStar } from 'react-icons/fa6';


const Reviews = () => {
  return (
    <div className=' py-[80px]'>
      <h2 className=" text-3xl sm:text-5xl text-center font-bold my-3 mb-12 text-black">What Our Client Says</h2>

      < div className=' grid gap-2 sm:grid-cols-3 grid-cols-1'>
          
          <div className='flex justify-center items-center flex-col'>
            <img
              src={pic3}
              alt='customer'
              className='rounded-full object-cover w-[100px] h-[100px]'
            />
            <p className='mt-6 max-w-sm text-center info-text'>"The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"</p>
            <div className='mt-3 flex justify-center items-center gap-2.5'>
              <FaStar className=' text-yellow-600' />
              <p className='text-xl font-montserrat text-slate-gray'>(4.5)</p>
            </div>
            <h3 className='mt-1 font-palanquin text-xl text-center font-bold'>
              Muhammad Ali
            </h3>
          </div>
          <div className='flex justify-center items-center flex-col'>
            <img
              src={pic3}
              alt='customer'
              className='rounded-full object-cover w-[100px] h-[100px]'
            />
            <p className='mt-6 max-w-sm text-center info-text'>"The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"</p>
            <div className='mt-3 flex justify-center items-center gap-2.5'>
              <FaStar className=' text-yellow-600' />
              <p className='text-xl font-montserrat text-slate-gray'>(4.5)</p>
            </div>
            <h3 className='mt-1 font-palanquin text-xl text-center font-bold'>
              Muhammad Ali
            </h3>
          </div>

          <div className='flex justify-center items-center flex-col'>
            <img
              src={pic2}
              alt='customer'
              className='rounded-full object-cover w-[100px] h-[100px]'
            />
            <p className='mt-6 max-w-sm text-center info-text'>"The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"</p>
            <div className='mt-3 flex justify-center items-center gap-2.5'>
              <FaStar className=' text-yellow-600' />
              <p className='text-xl font-montserrat text-slate-gray'>(4.5)</p>
            </div>
            <h3 className='mt-1 font-palanquin text-xl text-center font-bold'>
              Adil Rashid
            </h3>
          </div>


      </div>
    </div>
  )
}

export default Reviews