import React, { useState, useEffect, useContext } from "react";

//styles
import styles from "./Landing.module.css";

//functions
import { getProducts } from "../../services/api";
//images
import halfBanner1 from "../../assets/half-banner1.jpg";
import halfBanner2 from "../../assets/half-banner2.jpg";

//icons
import truckIcon from "../../assets/truck.svg";
import supportIcon from "../../assets/support.svg";
import productIcon from "../../assets/product-icon.svg";
import blogIcon from "../../assets/blog-icon.svg";
import logo from "../../assets/logo.svg";
import creditCardIcon from "../../assets/credit-card.svg"

//components
import SliderMainBanner from "../shared/SliderMainBanner/SliderMainBanner";
import ParentCards1 from "../shared/ParentCards1/ParentCards1";

//import contexts
import { ProductDataContext } from "../contexts/ProductsDataContextProvider";
import { BlogDataContext } from "../contexts/BlogDataContextProvider";
import ProductCard from "../shared/ProductCard/ProductCard";

const Landing = () => {
  const productsData = useContext(ProductDataContext);
  const blogsData = useContext(BlogDataContext);

  return (
    <div className={styles.landing}>
      <div className={styles.lRow1}>
        <SliderMainBanner />
      </div>
      <div className={styles.lRow2}>
        <div className={styles.lrow2Culs}>
          <div
            style={{ background: "#FBEDB7" }}
            className={styles.lrow2CulsIcon}
          >
            <img src={truckIcon} alt="truck" />
          </div>
          <div className={styles.lrow2CulsTitle}>
            <h4>حمل و نقل سریع</h4>
            <p>حمل و نقل سریع و به صرفه به سراسر کشور</p>
          </div>
        </div>
        <div className={styles.lrow2Culs}>
          <div
            style={{ background: "#DDC7E6" }}
            className={styles.lrow2CulsIcon}
          >
            <img src={supportIcon} alt="truck" />
          </div>
          <div className={styles.lrow2CulsTitle}>
            <h4> پشتیبانی 24 ساعته </h4>
            <p> در هر زمان پشتیبان شما هستیم </p>
          </div>
        </div>
        <div className={styles.lrow2Culs}>
          <div style={{background:"#B3DCFF"}} className={styles.lrow2CulsIcon}>
            <img src={creditCardIcon} alt="truck" />
          </div>
          <div  className={styles.lrow2CulsTitle}>
            <h4> پرداخت آسان  </h4>
            <p>  امکان پرداخت حضوری در محل</p>
          </div>
        </div>
        <div className={styles.lrow2Culs}>
          <div className={styles.lrow2CulsIcon}>
            <img src={truckIcon} alt="truck" />
          </div>
          <div className={styles.lrow2CulsTitle}>
            <h4>حمل و نقل سریع</h4>
            <p>حمل و نقل سریع و به صرفه به سراسر کشور</p>
          </div>
        </div>
      </div>
          <div className={styles.lrow3}>
            <h4>
                <img src={productIcon} alt="icon"/>
                جدیدترین محصولات
            </h4>
            <ParentCards1 data={productsData} 
              slides={{_1336:6,_1200:6,
                       _992:5,_768:5,
                       _576:4,_460:3,
                       _400:3,_300:2,
                       _200:2,0:1 }} 
              sectionType={"products"}/>

          </div>
          <div className={styles.lRow4}>
                <img src={halfBanner1} alt="banner"/>
                <img src={halfBanner2} alt="banner"/>
          </div>
          <div className={styles.lRow5}>
                <h4>
                    <img src={blogIcon} alt="icon"/>
                    جدیدترین مقالات
                </h4>  
                <ParentCards1 
                  data={blogsData} 
                  slides={{_1336:5,_1200:5,
                           _992:4,_768:4,
                           _576:3,_460:2,
                           _400:1,_300:1,
                           _200:1 }}  
                  sectionType={"blogs"}/>

          </div>
          <div className={styles.about}>
            <div className={styles.rightAbout}>
              <img src={logo} alt="logo"/>
            </div>
            <div className={styles.leftAbout}>
              <h4>فروشگاه اینترنتی دیجی استور</h4>
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
            </div>
          </div>
    </div>
  );
};

export default Landing;
