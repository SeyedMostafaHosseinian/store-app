import React , {useContext} from 'react';

//icons
import homeIcon from "../assets/home.svg";
import ariaLeftIcon from "../assets/aria-left.svg";
import productIcon from "../assets/product-icon-white.svg";
import factorIcon from "../assets/factor.svg";
import listIcon from "../assets/list.svg";
import checkoutCart from "../assets/checkout-cart.svg";

//images
import emptyCart from "../assets/empty-cart.jpg";
import ok3d from "../assets/ok3d.jpg";

//styles
import styles from "./Cart.module.css";

//cart data
import { cartContext } from './contexts/CartContextProvider';

//components
import CartCard from './shared/CartCard';
import { changeNumberToPersian } from '../helper/functions';
import { Link } from 'react-router-dom';

const Cart = () => {
    const{cart,dispatch} = useContext(cartContext)
    return (
        
        cart.selectedItems.length > 0 ?
        <div className={styles.cart}>
            <div className={styles.row1}>
                <div className={styles.pageAdress}>
                    <img src={homeIcon} alt="icon"/>
                    <img src={ariaLeftIcon} alt="icon"/>
                    <span>سبد خرید</span>
                </div>
                <h4>
                    سبد خرید 
                </h4>
            </div>
            <div className={styles.row2}>
                <div className={styles.rightSide}>
                  {
                    cart.selectedItems.map(item => <CartCard key={item.id}  data={item} dispatch={dispatch}/>)
                  }
                </div>
                <div className={styles.leftSide}>
                 {
                 
                    <div className={styles.factor}>
                      <h4>
                          <img src={listIcon} alt="icon"/>
                          پیش فاکتور 
  
                      </h4>
                      <div className={styles.total1}>
                          <div className={styles.totalIcon}>
                              <img src={productIcon} alt="icon"/>
                          </div>
                              <span>مجموع اقلام :</span>
                              <span>{changeNumberToPersian(cart.selectedItems.length)}</span>
                      </div>
                      <div className={styles.total2}>
                          <div className={styles.totalIcon}>
                              <img src={productIcon} alt="icon"/>
                          </div>
                              <span>مجموع آیتم ها :</span>
                              <span>{changeNumberToPersian(cart.total)}</span>
                      </div>
                      <div className={styles.total3}>
                          <div className={styles.totalIcon}>
                              <img src={factorIcon} alt="icon"/>
                          </div>
                              <span>  جمع کل سبد خرید :</span>
                              <span>{changeNumberToPersian(cart.totalPrice.toLocaleString())}  تومان </span>
                      </div>
                      <div className={styles.checkOut}>
                         <span className={styles.totalBoy}>مجموع پرداختی  : {changeNumberToPersian(cart.totalPrice.toLocaleString()) } تومان </span>
                         <div className={styles.cartOptionButtons}>
                              <button onClick={() => dispatch({type:"CHECKOUT"})} className={styles.checkOutButton}>
                                  <img src={checkoutCart} alt="icon"/>
                                  تسویه حساب
                              </button>
                              <button onClick={() => dispatch({type:"CLAER_CART"})} className={styles.clearCart}>
                                  <img src={checkoutCart} alt="icon"/>
                                   حذف همه
                              </button>
                         </div>
                      </div>
                    </div> 
                 }
                </div>
            </div>
        </div>
        : cart.checkout ? 
        <div className={styles.checkout}>
          <img src={ok3d}  />
          <span>تسویه حساب با موفقیت انجام شد</span>
          <Link to="/shop">
                محصولات بیشتر 
              <svg width="10" height="26" viewBox="0 0 20 36" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M0 17.5427C0 16.9142 0.240018 16.2854 0.718966 15.806L15.8056 0.719761C16.7653 -0.239921 18.3212 -0.239921 19.2805 0.719761C20.2398 1.67906 20.2398 3.2347 19.2805 4.19446L5.93125 17.5427L19.2796 30.8915C20.2389 31.8508 20.2389 33.4067 19.2796 34.3659C18.3203 35.3261 16.7648 35.3261 15.8051 34.3659L0.718422 19.2799C0.239552 18.8003 0 18.1715 0 17.5427Z" fill="#fff"/>
              </svg>
          </Link>
        </div>
        :
        <div className={styles.emptyCart}>
            <img src={emptyCart}  />
            <span>سبد خرید شما خالیست!</span>
            <Link to="/shop">
                بازگشت به فروشگاه
                <svg width="10" height="26" viewBox="0 0 20 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M0 17.5427C0 16.9142 0.240018 16.2854 0.718966 15.806L15.8056 0.719761C16.7653 -0.239921 18.3212 -0.239921 19.2805 0.719761C20.2398 1.67906 20.2398 3.2347 19.2805 4.19446L5.93125 17.5427L19.2796 30.8915C20.2389 31.8508 20.2389 33.4067 19.2796 34.3659C18.3203 35.3261 16.7648 35.3261 15.8051 34.3659L0.718422 19.2799C0.239552 18.8003 0 18.1715 0 17.5427Z" fill="#fff"/>
                </svg>
            </Link>
        </div>
      
    );
};

export default Cart;