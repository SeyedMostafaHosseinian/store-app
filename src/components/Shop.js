import React, { useContext } from 'react';

//styles 
import styles from "./Shop.module.css";

//icons 
import homeIcon from "../assets/home.svg";
import arialeftIcon from "../assets/aria-left.svg";


//product data
import { ProductDataContext } from './contexts/ProductsDataContextProvider';
import ProductCard from './shared/ProductCard';
import { changeNumberToPersian, numberTransitionCounter } from '../helper/functions';

const Shop = () => {
    const product = useContext(ProductDataContext)
    console.log(product)
    return (
        <div className={styles.shop}>
            <div className={styles.row1}>
                <div className={styles.pageAdress}>
                    <img src={homeIcon} alt="icon"/>
                    <img src={arialeftIcon} alt="icon"/>
                    <span>فروشگاه</span>
                </div>
                <h4>
                    فروشگاه 
                </h4>
            </div>
            <div className={styles.row2}>
                <div className={styles.leftSide}>
                  <div className={styles.fiterBox}>
                    <div className={styles.rigthFilter}>
                        مرتب سازی: 
                        <button className={styles.activeFilter}>جدیدترین</button>
                        <button>پربازدیدترین</button>
                        <button>محبوب ترین</button>
                        <button>ارزان ترین</button>
                        <button>گران ترین</button>
                    </div>
                    <div className={styles.leftFilter}>
                        <span>{changeNumberToPersian(product.length)} کالا</span>
                    </div>
                  </div>  
                  <div className={styles.productCards}>
                    { product.map(item => <ProductCard key={item.id} data={item} />)}
                  </div>

                </div>
            </div>
        </div>
    );
};

export default Shop;