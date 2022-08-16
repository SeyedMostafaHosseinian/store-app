import React, { useState ,useEffect, useContext } from 'react';

//styles
import styles from "./Landing.module.css";

//functions
import { getProducts } from '../services/api';
//images
import halfBanner1 from "../assets/half-banner1.png";
import halfBanner2 from "../assets/half-banner2.png";


//icons 
import truckIcon from "../assets/truck.svg";
import supportIcon from "../assets/support.svg";
import productIcon from "../assets/product-icon.svg";
import blogIcon from "../assets/blog-icon.svg";

//components
import SliderMainBanner from './shared/SliderMainBanner';
import ParentCards1 from './shared/ParentCards1';

//import contexts
import { ProductDataContext } from './contexts/ProductsDataContextProvider';
import { BlogDataContext } from './contexts/BlogDataContextProvider';
import ProductCard from './shared/ProductCard';

const Landing = () => {
    const productsData  = useContext(ProductDataContext)
    const blogsData = useContext(BlogDataContext)

    console.log(productsData)
    console.log(blogsData)

    return (
        <div className={styles.landing}>
            <div className={styles.lRow1}>
              <SliderMainBanner />
            </div>
            <div className={styles.lRow2}>
                <div className={styles.lrow2Culs}>
                    <div className={styles.lrow2CulsIcon}>
                        <img src={truckIcon}  alt="truck"/>
                    </div>
                    <div className={styles.lrow2CulsTitle}>
                        <h4>حمل و نقل سریع</h4>
                        <p>حمل و نقل سریع و به صرفه به سراسر کشور</p>
                    </div>
                </div>
                <div className={styles.lrow2Culs}>
                    <div className={styles.lrow2CulsIcon}>
                        <img src={supportIcon}  alt="truck"/>
                    </div>
                    <div className={styles.lrow2CulsTitle}>
                        <h4> پشتیبانی 24 ساعته  </h4>
                        <p> در هر زمان پشتیبان  شما هستیم </p>
                    </div>
                </div>
                <div className={styles.lrow2Culs}>
                    <div className={styles.lrow2CulsIcon}>
                        <img src={truckIcon}  alt="truck"/>
                    </div>
                    <div className={styles.lrow2CulsTitle}>
                        <h4>حمل و نقل سریع</h4>
                        <p>حمل و نقل سریع و به صرفه به سراسر کشور</p>
                    </div>
                </div>
                <div className={styles.lrow2Culs}>
                    <div className={styles.lrow2CulsIcon}>
                        <img src={truckIcon}  alt="truck"/>
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
                <ParentCards1 data={productsData} slides={6} sectionType={"products"}/>
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
                <ParentCards1 data={blogsData} slides={4} sectionType={"blogs"}/>

            </div>
        </div>
    );
};

export default Landing;