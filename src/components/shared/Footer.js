import React from 'react';


//styles
import styles from "./Footer.module.css";

//images
import logo from "../../assets/logo.svg";
const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
                <img src={logo} />
                {/* <span>توسععه دهنده: سید مصطفی حسینی</span> */}
            </div>
        </div>
    );
};

export default Footer;