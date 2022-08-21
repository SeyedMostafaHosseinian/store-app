import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./ParentCards1.css";

// import required modules
import { Pagination , Navigation, Autoplay } from "swiper";

//components
import ProductCard from './ProductCard';
import BlogCard from './BlogCard';

const ParentCards1 = ({data,slides,sectionType}) => {
    return (
        <>
        <Swiper
        //   slidesPerView={slides}
          spaceBetween={12}
          pagination={false}
          navigation={false}
          slidesPerGroup={3}
          loop={false}
          autoplay={
        //    {
        //     delay: 3000,
        //     disableOnInteraction: false,
        //    }
            false
          }
          modules={[Pagination , Navigation , Autoplay]}
          className="mySwiper"
          breakpoints={{
            1366: {
             slidesPerView: slides.dp,
            },
            1200:{
             slidesPerView: slides.lp,
            },
            992:{
             slidesPerView:slides.tt,
             slidesPerGroup:1
            },
            768:{
             slidesPerView:slides.mt,
             slidesPerGroup:1
            },
            576:{
             slidesPerView:slides.mt,  
            },
            460: {
             slidesPerView: slides.lm,
             slidesPerGroup:1
             },
            400: {
             slidesPerView: slides.lm,
             slidesPerGroup:1
            },
            300:{
             slidesPerView: slides.lm,
             slidesPerGroup:1
            },
            200:{
             slidesPerView: slides.sm,
             slidesPerGroup:1
            }
       
          }}
        >
            {
                sectionType === "products" &&
                data.map(item =>  
                <SwiperSlide key={item.id}>
                    <ProductCard key={item.id} data={item} />
                </SwiperSlide> )
                
            }
            {
                sectionType === "blogs" &&
                                          
                data.map(item => 
                <SwiperSlide key={item.id} >
                    <BlogCard key={item.id} data={item} />
                </SwiperSlide>)

            }
        </Swiper>
      </>
    );
};

export default ParentCards1;