import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//styles 
import styles from "./Login.module.css";

//assets
import loginIcon from "../../../assets/login.svg";
import loader3 from "../../../assets/loader3.gif";


// validator function
import { validator } from '../../../helper/functions';

const Login = () => {
    const[aouthed,setAouthed] = useState("forming")
    const[errors,setErrors] = useState({})
    const[values,setValues] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
    })

    //toched inputs
    const[isToched,setIsToched] = useState({
        name:false,
        password:false,
    })

    const changeHandler = (event) => {

        setValues({
            ...values,
            [event.target.name] : event.target.value

        })   
    }
    useEffect(() => {
        setErrors({...validator(values,"login")})
        
    },[values])

    const clickHandler = (event) => {
        setIsToched({
            ...isToched,
            [event.target.name]:true
        })
    }
    
    const submitHandler = (event) => {
        event.preventDefault()
        if(Object.keys(errors).length > 0) {
            setIsToched({
                name:true,
                email:true,
                password:true,
                confirmPassword:true,
            })
            console.log(Object.keys(errors).length)
        }
        else {
            console.log("ok")
            setAouthed("loading")
        }
    }

    return (
       <div className={styles.loginParent}>
       
         <div className={styles.parentForm}>
             <div  className={styles.loginForm}>
             <form onSubmit={submitHandler} className={styles.rightLogin}>
                        <div className={styles.row}>
                            <label>نام کاربری</label>

                            <input onClick={clickHandler}  onChange={changeHandler} name="name" value={values.name} />

                            { errors.name && isToched.name && <span className={styles.error}>{errors.name}</span>}
                        </div>

                        <div className={styles.row}>
                            <label> رمز ورود</label>

                            <input onClick={clickHandler}  onChange={changeHandler} name="password" value={values.password} />

                            { errors.password &&  isToched.password && <span className={styles.error}>{errors.password}</span>}
                        </div>

                        <button type="submit">
                            {
                                aouthed === "forming"  ? "ورود" : <img src={loader3} alt="loader"/> 
                            }
                            
                           
                        </button>

                        <div className={styles.hintLogin}>
                            <p>حساب کاربری ندارید ؟</p>

                            <Link  to="/signup"> ایجاد حساب کاربری </Link>
                        </div>
                    </form>
                <div className={styles.leftLogin}>
                    <div className={styles.loginImage}>
                        <img src={loginIcon} alt="icon"/>
                    </div>
                    <h5>ورود به حساب به کاربری </h5>
                </div>
             </div>

         </div>


         <div  className={styles.formBackground}></div>
       </div> 
    );
};
export default Login;


