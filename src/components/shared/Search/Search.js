import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

//assets
import searchIcon from "../../../assets/search.svg";
import loader2 from "../../../assets/loader2.gif";


//helper functions
import { titleShorter } from '../../../helper/functions';

//styles
import styles from "./Search.module.css";


const Search = () => {
    const[searchValue,setSearchValue] = useState("")
    const[searching,setSearching] = useState(false)
    const[sResult1,setSResult1] = useState([])

    const inlineStyles = {
        resultStyle : {
            transform: searching && "scaleY(100%)",
        },
        searchCloserStyle : {
            display:searching ? "block" : "none",  
        }
    }
    const searchHandler =(event) => {

        setSearchValue(event.target.value)
        setSearching(true)
        event.target.value.length === 0 &&  setSearching(false)

        if(event.target.value.length >= 2 && searching) {
            axios.get(`https://digistore.glitch.me/blogs?q=${event.target.value}`)
            .then(response => {
                setSResult1(response.data)
            }) 
            axios.get(`https://digistore.glitch.me/products?q=${event.target.value}`)
            .then(response => {
                setSResult1(response.data)
            }) 
        }
        if(searching) {
            setSResult1([ ]);
        }
    }
    return (
        <div className={styles.searchBox}>
          
          <input onChange={searchHandler} value={searchValue} type="text" placeholder='جستجو  ...' />
         
          <button>
            <img src={searchIcon} alt="icon"/>
          </button>
          
          <div style={inlineStyles.resultStyle} className={styles.results}>
            {
              sResult1.length ? sResult1.map(item => 
                 
                <div className={styles.resultChilds} key={item.id}>
                    <img src={item.image} alt="img"/>
                    <Link className={styles.resultsTitle} to={`/blogs/${item.id}`} >{titleShorter(item.title,40)}</Link>
                    <Link className={styles.category} to="/">{item.category}</Link>
                </div>) :  <img src={loader2} alt="loader"/>
                
            }
          </div>
          
          <div onClick={() => setSearching(false)} style={inlineStyles.searchCloserStyle} className={styles.searchCloser}></div>
        
        </div>
    );
};

export default Search;