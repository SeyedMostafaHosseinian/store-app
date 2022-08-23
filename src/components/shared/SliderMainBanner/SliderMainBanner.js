import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./SliderMainBanner.css";

// import required modules
import { Pagination , Autoplay , Navigation } from "swiper";

//images
import mainBanner2 from "../../../assets/banner2.jpg";
import mainBanner3 from "../../../assets/banner3.jpg";
import mainBanner4 from "../../../assets/banner4.jpg";



const SliderMainBanner = () => {
  return (
    <Swiper
    spaceBetween={30}
    centeredSlides={true}
    loop={true}
    autoplay={
    //   {
    //   delay: 3000,
    //   disableOnInteraction: false,
    //  }
    false
    }
    pagination={{
      clickable: true,
    }}
    navigation={false}
    modules={[Autoplay, Pagination, Navigation ]}
    className="mySwiper" >


      <SwiperSlide>
        <img src={mainBanner2} alt="banner"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={mainBanner3} alt="banner"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={mainBanner4} alt="banner"/>
      </SwiperSlide>


    </Swiper>
  );
};

export default SliderMainBanner;
