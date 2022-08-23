import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

//styles
import styles from "./Navbar.module.css";

//logo && icons
import logo from "../../../assets/logo.svg";
import searchIcon from "../../../assets/search.svg";
import userIcon from "../../../assets/user.svg";
import cartIcon from "../../../assets/cart.svg";
import cartIcon2 from "../../../assets/cart2.svg";
import heartIcon from "../../../assets/heart.svg";
import homeIcon from "../../../assets/home.svg";
import shopIcon from "../../../assets/shop.svg";
import aboutusIcon from "../../../assets/aboutus.svg";
import githubIcon from "../../../assets/github.svg";

//cart data
import { cartContext } from '../../contexts/CartContextProvider';

//helper functions
import { changeNumberToPersian } from '../../../helper/functions';

const Navbar = () => {
    const [show,setShow] = useState(false);

    const hamburgerMenuShow  = () => {
        setShow(!show)     
    }

    const{cart} = useContext(cartContext)
    return (
        <>
            <div className={styles.navbar}>

            <div className={styles.row1}>
                <img src={logo}  alt="logo"/>
                <form className={styles.searchBox}>
                    <input type="text" placeholder='جستجوی محصولات.' />
                    <button type="submit">
                        <img src={searchIcon} alt="icon"/>
                    </button>
                </form>
                <div className={styles.row1Cul3}>
                    <Link to="/" className={styles.loginButton}>
                        <img src={userIcon}  alt="user"/>
                        ورود / ثبت نام
                    </Link>
                    <Link to="/cart" className={styles.cartButton}>
                        <img src={cartIcon}  alt="user"/>
                        <span>{changeNumberToPersian(cart.total)}</span>
                    </Link>

                </div>
                
            </div>  
            <div className={styles.line}></div>
            <div className={styles.row2}>
                <ul>
                    <li><Link className={styles.activePageLink} to="/">صفحه نخست</Link></li>
                    <li><Link to="/shop"> فروشگاه</Link></li>
                    <li><Link to="/cart"> سبد خرید</Link></li>
                    <li><Link to="/blog"> بلاگ</Link></li>
                    <li><Link to="/"> درباره ما</Link></li>
                    <li><Link to="/"> سورس کد</Link></li>
                </ul>
            </div>
            </div>
            <div className={styles.responsiveNavbar}>
                <div className={styles.topRes}>
                    <button onClick={hamburgerMenuShow} className={styles.hamburgerButton}>
                     <div></div>
                     <div></div>
                     <div></div>
                    </button>
                    <div className={styles.resLogo}>
                     <img src={logo} />
                    </div>
                    <div className={styles.resCul3}>
                        <img src={heartIcon} alt="icon"/>
                    </div>
                </div>
                <div className={styles.buttomRes}>
                  <div className={styles.resSearchBox}>
                    <form>
                      <input type="text" placeholder='جستجوی محصولات...' />
                      <button type="submit">
                          <img src={searchIcon} alt="icon"/>
                      </button>
                    </form>
                  </div>
                  <Link className={styles.resLogin} to="/">
                      <img src={userIcon} />
                      <span>ورود</span>
                  </Link>
                  <Link to="/cart" className={styles.resCartButton}>
                        <img src={cartIcon}  alt="user"/>
                        <span>{changeNumberToPersian(cart.total)}</span>
                  </Link>

                </div>
            </div>
            <div style={{ transform:`${show ? "translateX(0)" : "translateX(101%)" }`}} className={styles.hamburgerMenu}>
                <div className={styles.hamRow1}>
                    <img src={logo} alt="logo"/>
                </div>
                    <ul>
                        <li>
                            <Link to="/">
                              <img src={homeIcon} />
                              صفحه نخست
                            </Link>
                        </li>
                        <li>
                            <Link to="/shop">
                              <img src={shopIcon} />
                               فروشگاه
                            </Link>
                        </li>
                        <li>
                            <Link to="/cart">
                              <img src={cartIcon2} />
                               سبد خرید
                            </Link>
                        </li>
                        <li>
                            <Link to="/blogs">
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.75 13H0.5V14.25H6.75V13Z" fill="#7B7B7B"/>
                              <path d="M6.75 9.25H0.5V10.5H6.75V9.25Z" fill="#7B7B7B"/>
                              <path d="M14.25 6.75H1.75C1.41848 6.75 1.10054 6.6183 0.866116 6.38388C0.631696 6.14946 0.5 5.83152 0.5 5.5V1.75C0.5 1.41848 0.631696 1.10054 0.866116 0.866116C1.10054 0.631696 1.41848 0.5 1.75 0.5H14.25C14.5815 0.5 14.8995 0.631696 15.1339 0.866116C15.3683 1.10054 15.5 1.41848 15.5 1.75V5.5C15.5 5.83152 15.3683 6.14946 15.1339 6.38388C14.8995 6.6183 14.5815 6.75 14.25 6.75ZM1.75 1.75V5.5H14.25V1.75H1.75Z" fill="#7B7B7B"/>
                              <path d="M14.25 15.5H10.5C10.1685 15.5 9.85054 15.3683 9.61612 15.1339C9.3817 14.8995 9.25 14.5815 9.25 14.25V10.5C9.25 10.1685 9.3817 9.85054 9.61612 9.61612C9.85054 9.3817 10.1685 9.25 10.5 9.25H14.25C14.5815 9.25 14.8995 9.3817 15.1339 9.61612C15.3683 9.85054 15.5 10.1685 15.5 10.5V14.25C15.5 14.5815 15.3683 14.8995 15.1339 15.1339C14.8995 15.3683 14.5815 15.5 14.25 15.5ZM10.5 10.5V14.25H14.25V10.5H10.5Z" fill="#7B7B7B"/>
                            </svg>
                                بلاگ
                            </Link>
                        </li>
                        <li>
                            <Link to="/aboutus">
                              <img src={aboutusIcon} />
                               درباره ما 
                            </Link>
                        </li>
                        <li>
                            <a href="https://github.com/SeyedMostafaHosseinian/store-app.git" >
                              <img src={githubIcon} />
                                گیت هاب 
                            </a>
                        </li>
                    </ul>
            </div>
            <div 
            style={{ display:` ${ show ? "block" : "none" }` }} 
            className={styles.menuCloser}
            onClick = {hamburgerMenuShow}
            ></div>
        </>
    );
};

export default Navbar;