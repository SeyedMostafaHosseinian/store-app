import React from 'react';

//styles
import styles from "./ProductCard.module.css";

const ProductCard = ({data}) => {
    const {title , image , price  , like } = data
    return (
        <div className={styles.productCard}>
            <img src={image} alt="thumbnail"/>
        </div>
    );
};

export default ProductCard;