import React, { useContext, useState , useRef } from 'react';
import { changeNumberToPersian, getQuantity, titleShorter } from '../../helper/functions';

//styles
import styles from "./ProductCard.module.css";

//icons
import trashIcon from "../../assets/trash.svg";
import plusIcon from "../../assets/plus.svg";
import subtractionIcon from "../../assets/subtraction.svg";

import { cartContext } from '../contexts/CartContextProvider';

const ProductCard = ({data}) => {

    const likeSvg = useRef(null)

    const {title , image , price  , like,id } = data;

    const {cart,dispatch} = useContext(cartContext)
    
    const quantity = getQuantity(cart.selectedItems,id)
    
    const likeHandler = event => {
        if(event.target.parentElement === likeSvg.current) {
            event.target.parentElement.classList.toggle("activeLike")
        }
        console.log(likeSvg)
    }
    return (
        <div className={styles.productCard}>
            <img src={image} alt="thumbnail"/>
            <h4>{titleShorter(title,50) }</h4>
            <span>{changeNumberToPersian(price.toLocaleString())} تومان</span>

                <div className={styles.productButtons}>

                    <div className={styles.quantityButtons}>

                        {!quantity  && <button onClick={ () => dispatch({type:"ADD_TO_CART", id})}><img src={plusIcon} alt="icon"/></button>}
                        
                        {quantity >= 1 && <button onClick={ () => dispatch({type:"UP_QUANTITY", id})}><img src={plusIcon} alt="icon"/></button>}
                     
                        <span>{quantity ? changeNumberToPersian(quantity) : changeNumberToPersian(0)  }</span>
                        
                        {quantity === 1 && <button onClick={ () => dispatch({type:"CLEAR_ITEM", id})} className={styles.unactiveButton}><img src={subtractionIcon}  alt="icon"/></button>}
                        
                        {quantity > 1 && <button onClick={ () => dispatch({type:"DOWN_QUANTITY", id})} className={styles.unactiveButton}><img src={subtractionIcon}  alt="icon"/></button>}
                        
                        {!quantity && <button className={styles.unactiveButton}><img src={subtractionIcon}  alt="icon"/></button>}
                      
                   </div>
                   
                        {!quantity && <button  className={styles.unactiveButton}><img src={trashIcon} alt="icon" /></button>}
                        
                        {quantity >= 1 && <button onClick={ () => dispatch({type:"CLEAR_ITEM", id})}  className={styles.unactiveButton}><img src={trashIcon} alt="icon" /></button>}
                  
                   <button onClick={likeHandler} className={styles.likeButton}>
                     <svg ref={likeSvg} width="19" height="18" viewBox="0 0 19 18" fill="red" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.57201 2.52939C9.55407 2.50989 9.53613 2.49156 9.51819 2.47362C9.05602 2.00978 8.50701 1.64152 7.90252 1.38985C7.29802 1.13819 6.64988 1.00806 5.99509 1.00688C5.34031 1.0057 4.6917 1.13351 4.0863 1.383C3.48091 1.63248 2.93059 1.99877 2.46675 2.46094C2.00291 2.92311 1.63465 3.47212 1.38298 4.07662C1.13132 4.68111 1.00119 5.32925 1.00001 5.98404C0.998831 6.63883 1.12664 7.28744 1.37612 7.89283C1.62561 8.49823 1.9919 9.04855 2.45407 9.51239C2.47357 9.53189 2.49307 9.55139 2.5157 9.57089L9.57201 16.6167L16.6361 9.57811L16.6281 9.57011C16.65 9.55217 16.6699 9.53228 16.6898 9.51161C17.1533 9.04807 17.5208 8.49769 17.7714 7.89196C18.0219 7.28622 18.1506 6.63703 18.15 5.98152C18.1494 5.32601 18.0195 4.67705 17.7679 4.07177C17.5162 3.4665 17.1477 2.91679 16.6833 2.4541C16.219 1.99142 15.668 1.62483 15.0618 1.37532C14.4556 1.12581 13.8062 0.998277 13.1507 1.00002C12.4952 1.00176 11.8465 1.13274 11.2416 1.38546C10.6368 1.63819 10.0877 2.00769 9.62584 2.47284C9.6079 2.49156 9.58996 2.5095 9.57201 2.52939Z" fill="white" stroke="#333" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
                     </svg>
                   </button>
                  </div>
            {/* <button className={styles.addToCart}>افزودن به سبد خرید</button> */}
        </div>
    );
};

export default ProductCard;