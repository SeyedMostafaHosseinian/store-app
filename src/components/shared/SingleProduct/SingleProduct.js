import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//styles
import styles from "./SingleProduct.module.css";

//helper functions
import { changeNumberToPersian, getQuantity, titleShorter } from '../../../helper/functions';

//cart data
import { cartContext } from '../../contexts/CartContextProvider';

//product data
import { ProductDataContext } from '../../contexts/ProductsDataContextProvider';
import axios from 'axios';

//icons
import trashIcon from "../../../assets/trash.svg";
import plusIcon from "../../../assets/plus.svg";
import subtractionIcon from "../../../assets/subtraction.svg";


const SingleProduct = (props) => {
    const [product,setProduct] = useState({title:"صبرکنید..."})
    const {cart,dispatch} = useContext(cartContext);
    const id = Number(props.match.params.id);
    const {title,image,price,description} = product 
    const quantity = getQuantity(cart.selectedItems,id)
    
    useEffect(() => {
        axios.get(`https://digistore.glitch.me/products/${id}`)
        .then(response => {
            setProduct( response.data)
        })
        
    },[])
    return (
        <div className={styles.singleProduct}>

            <div className={styles.adressBar}>

                <div className={styles.leftAddress}>
                    
                    <Link to="/">خانه  /  </Link>
                    <Link to="/shop"> محصولات  /  </Link>
                    <span>{titleShorter(title,40)}</span>

                </div>

                <div className={styles.topAboutPro}>

                    <img src={image} alt="img"/>

                    <div className={styles.leftAbout}>

                        <h4>{title}</h4>
                        <span>{changeNumberToPersian(price)}تومان</span>

                        <div className={styles.productButtons}>

                            <div className={styles.quantityButtons}>

                                {!quantity  && <button className={styles.upButton} onClick={ () => dispatch({type:"ADD_TO_CART", id})}><img  src={plusIcon} alt="icon"/></button>}

                                {quantity >= 1 && <button className={styles.upButton} onClick={ () => dispatch({type:"UP_QUANTITY", id})}><img src={plusIcon} alt="icon"/></button>}

                                <span>{quantity ? changeNumberToPersian(quantity) : changeNumberToPersian(0)  }</span>

                                {quantity === 1 && <button onClick={ () => dispatch({type:"CLEAR_ITEM", id})} className={styles.unactiveButton}><img src={subtractionIcon}  alt="icon"/></button>}

                                {quantity > 1 && <button className={styles.downButton} onClick={ () => dispatch({type:"DOWN_QUANTITY", id})} className={styles.unactiveButton} ><img src={subtractionIcon}  alt="icon"/></button>}

                                {!quantity && <button className={styles.unactiveButton}><img src={subtractionIcon}  alt="icon"/></button>}

                            </div>

                                {!quantity && <button  className={styles.unactiveButton}><img src={trashIcon} alt="icon" /></button>}

                                {quantity >= 1 && <button onClick={ () => dispatch({type:"CLEAR_ITEM", id})}  className={styles.unactiveButton}><img src={trashIcon} alt="icon" /></button>}
                        
                        </div>

                    </div>

                </div>

                <div className={styles.bottomAboutPro}>
                    <span>توضیحات</span>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;