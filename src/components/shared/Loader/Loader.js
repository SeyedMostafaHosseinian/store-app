import React from 'react';

//styles
import styles from "./Loader.module.css";
import gifLoader from "../../../assets/loader.gif";

const Loader = () => {
    return (
        <div className={styles.loader}>
            <img src={gifLoader} alt="loader"/>
        </div>
    );
};

export default Loader;