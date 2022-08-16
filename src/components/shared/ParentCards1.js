import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./ParentCards1.css";

// import required modules
import { Pagination , Navigation } from "swiper";

//components
import ProductCard from './ProductCard';

const ParentCards1 = ({products}) => {
    return (
        <>
        <Swiper
          slidesPerView={6}
          spaceBetween={12}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination , Navigation ,]}
          className="mySwiper"
        >
            {products.map(item =>  
                <SwiperSlide key={item.id}>
                    <ProductCard key={item.id} data={item} />
                </SwiperSlide> )}
         

        </Swiper>
      </>
    );
};

export default ParentCards1;