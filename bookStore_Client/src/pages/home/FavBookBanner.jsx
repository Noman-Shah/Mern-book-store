import React from 'react'
import FavBook from '../../assets/favoritebook.jpg'
import { Link } from 'react-router-dom'

const FavBookBanner = () => {
    return (
        <div className=' px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center'>

            <div className='md:w-1/2'>
                <img src={FavBook} alt="" className='md:w-10/12' />
            </div>
            <div className=' md:w-1/2 space-y-6 '>
                <h2 className=' text-3xl sm:text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find Your Favourite <span className='text-blue-700'><br /> Book here </span></h2>
                <p className=' mb-10 text-sm sm:text-lg md:w-5/6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia at laborum vel expedita? Excepturi explicabo voluptates nam officia repellat exercitationem nisi facere non eaque quae repudiandae, ducimus saepe omnis aliquam.</p>

                {/* stats  */}
                <div className=' flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                    <div>
                        <h3 className=' text-2xl sm:text-3xl font-bold'>800+</h3>
                        <p className=' text-base'>Book Listing</p>
                    </div>
                    <div>
                        <h3 className=' text-2xl sm:text-3xl font-bold'>550+</h3>
                        <p className=' text-base'>Register Users</p>
                    </div>
                    <div>
                        <h3 className=' sm:text-3xl text-2xl font-bold'>1200+</h3>
                        <p className=' text-base'>PDF Downloads</p>
                    </div>
                </div>

                <Link to='/shop' className=' mt-12 block'><button className=' bg-blue-700 text-white rounded font-bold px-5 py-2'>Explore More</button></Link>
            </div>

        </div>
    )
}

export default FavBookBanner