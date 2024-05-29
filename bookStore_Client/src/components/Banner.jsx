import React from 'react'
import BannerCard from './bannerCard/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>

            {/* left side */}
            <div className=' space-y-6 md:w-1/2 h-full'>
                <h2 className='text-5xl font-bold leading-snug text-black'>Buy and Sell Your Books <span className='text-blue-700'> for the Best Prices</span></h2>
                <p className=' md:w-4/5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam sint quas aspernatur, placeat eos delectus ullam, ipsa modi ratione labore esse voluptatibus error, mollitia unde quam reprehenderit cupiditate sit ab.</p>
                <div>
                    <input type="search" name='search' id='search' placeholder='Search a book' className='px-4 rounded-s-sm outline-none py-3' />
                    <button className='bg-blue-700 px-6 py-3 text-white font-medium transition-all ease-in duration-200 rounded'>Search</button>
                    
                </div>
            </div>

            {/* right side */}
            <div>
              <BannerCard />
            </div>
          
        </div>
    </div>
  )
}
    
export default Banner