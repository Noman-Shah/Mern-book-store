import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// Import Swiper CSS modules styles
import './BannerCard.css'

// import required modules
import { EffectCards } from 'swiper/modules';


const BannerCard = () => {
  return (
    <>
      <div className='container-1'>
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        
      </Swiper>
      </div>
      
    </>
  )
}

export default BannerCard