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
          slidesPerView={slides}
          spaceBetween={12}
          pagination={false}
          navigation={false}
          slidesPerGroup={3}
          loop={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination , Navigation , Autoplay]}
          className="mySwiper"
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