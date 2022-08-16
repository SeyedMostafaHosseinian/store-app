import React, { useState ,useEffect, useContext } from 'react';

//styles
import styles from "./Landing.module.css";

//functions
import { getProducts } from '../services/api';

//icons 
import truckIcon from "../assets/truck.svg";
import supportIcon from "../assets/support.svg";
import productIcon from "../assets/product-icon.svg";

//components
import SliderMainBanner from './shared/SliderMainBanner';
import ParentCards1 from './shared/ParentCards1';

//import contexts
import { ProductDataContext } from './contexts/ProductsDataContextProvider';

const Landing = () => {
    const productsData  = useContext(ProductDataContext)
    console.log(productsData)
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
                <ParentCards1 products={productsData}/>
            </div>
        </div>
    );
};

export default Landing;