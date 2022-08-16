import React from 'react';
import { Link } from 'react-router-dom';
//styles
import styles from "./Navbar.module.css";

//logo && icons
import logo from "../../assets/logo.svg";
import searchIcon from "../../assets/search.svg";
import userIcon from "../../assets/user.svg";
import cartIcon from "../../assets/cart.svg";


const Navbar = () => {
    return (
        <div className={styles.navbar}>
          <div className={styles.row1}>
            <img src={logo}  alt="logo"/>
            <form className={styles.searchBox}>
                <input type="text" placeholder='جستجوی محصولات...' />
                <button type="submit">
                    <img src={searchIcon} alt="icon"/>
                </button>
            </form>
            <div className={styles.row1Cul3}>
                <a className={styles.loginButton}>
                    <img src={userIcon}  alt="user"/>
                    ورود / ثبت نام
                </a>
                <a className={styles.cartButton}>
                    <img src={cartIcon}  alt="user"/>
                    <span>0</span>
                </a>

            </div>
            
          </div>  
           <div className={styles.line}></div>
           <div className={styles.row2}>
            <ul>
                <li><Link className={styles.activePageLink} to="/">صفحه نخست</Link></li>
                <li><Link to="/"> فروشگاه</Link></li>
                <li><Link to="/"> سبد خرید</Link></li>
                <li><Link to="/"> بلاگ</Link></li>
                <li><Link to="/"> درباره ما</Link></li>
                <li><Link to="/"> سورس کد</Link></li>
            </ul>
          </div>
        </div>
        
    );
};

export default Navbar;