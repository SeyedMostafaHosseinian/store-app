import React, { useContext } from 'react';

//styles
import styles from "./CartCard.module.css";

//helpr functions
import { changeNumberToPersian } from '../../helper/functions';
import { titleShorter } from '../../helper/functions';

//icons
import trashIcon from "../../assets/trash.svg";
import plusIcon from "../../assets/plus.svg";
import subtractionIcon from "../../assets/subtraction.svg";
import addToCartIcon  from "../../assets/add-to-cart.svg";

// cart data
import { cartContext } from '../contexts/CartContextProvider';

const CartCard = ({data}) => {
   const {dispatch} = useContext(cartContext)

    const {title , image , price , quantity , id} = data;
    return (
        <div className={styles.cartCard}>
            <img src={image}  alt="thumbnail"/>
            <div className={styles.cardLeft}>
                <div className={styles.topLeftCard}>
                    <h4>{titleShorter(title,70)}</h4>
                    <span>{changeNumberToPersian(price.toLocaleString())}  تومان</span>
                </div>
                <div className={styles.buttomLeftCard}>
                  <div className={styles.productButtons}>

                    <div className={styles.quantityButtons}>

                        {!quantity  && <button className={styles.addToCart} onClick={ () => dispatch({type:"ADD_TO_CART", id})}><img  src={addToCartIcon} alt="icon"/></button>}

                        {quantity >= 1 && <button onClick={ () => dispatch({type:"UP_QUANTITY", id})}><img src={plusIcon} alt="icon"/></button>}

                        <span>{quantity ? changeNumberToPersian(quantity) : changeNumberToPersian(0)  }</span>

                        {quantity === 1 && <button onClick={ () => dispatch({type:"CLEAR_ITEM", id})} className={styles.unactiveButton}><img src={subtractionIcon}  alt="icon"/></button>}

                        {quantity > 1 && <button onClick={ () => dispatch({type:"DOWN_QUANTITY", id})} className={styles.unactiveButton}><img src={subtractionIcon}  alt="icon"/></button>}

                        {!quantity && <button className={styles.unactiveButton}><img src={subtractionIcon}  alt="icon"/></button>}

                    </div>

                        {!quantity && <button  className={styles.unactiveButton}><img src={trashIcon} alt="icon" /></button>}

                        {quantity >= 1 && <button onClick={ () => dispatch({type:"CLEAR_ITEM", id})}  className={styles.unactiveButton}><img src={trashIcon} alt="icon" /></button>}
                
                  </div>

                </div>
            </div>
        </div>
    );
};

export default CartCard;