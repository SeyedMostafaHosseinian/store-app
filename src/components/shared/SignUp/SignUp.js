import React, { useEffect, useState } from 'react';
import {Formik} from "formik"

//styles 
import styles from "./SignUp.module.css";

//assets
import loginIcon from "../../../assets/login.svg"
import { Link } from 'react-router-dom';
import loader3 from "../../../assets/loader3.gif";


// validator function
import { validator } from '../../../helper/functions';

const Signup = () => {

    const[aouthed,setAouthed] = useState("forming")

    //input values
    const[values,setValues] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
    })

    //toched inputs
    const[isToched,setIsToched] = useState({
        name:false,
        email:false,
        password:false,
        confirmPassword:false,
    })

    //validation errors
    const[errors,setErrors] = useState({})

    const changeHandler = (event) => {

        setValues({
            ...values,
            [event.target.name] : event.target.value

        })   
    }
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
        }
        else {
            setAouthed("loading")
        }
    }

    useEffect(() => {
        setErrors({...validator(values,"signup")})
        
    },[values,isToched])


    return (
        <div className={styles.loginParent}>
            <div className={styles.parentForm}>
                <div  className={styles.signUpForm}>
                    <form onSubmit={submitHandler} className={styles.rightLogin}>
        
                        <div className={styles.row}>
                            <label>نام کاربری</label>
                            <input  onClick={clickHandler}  onChange={changeHandler} name="name" value={values.name} />
                            { errors.name && isToched.name && <span className={styles.error}>{errors.name}</span>}
                        </div>
        
                        <div className={styles.row}>
                            <label> ایمیل</label>
                            <input  onClick={clickHandler} onChange={changeHandler} name="email" value={values.email} />
                            { errors.email && isToched.email && <span className={styles.error}>{errors.email}</span>}
                        </div>
        
                        <div className={styles.row}>
                            <label> رمز ورود</label>
                            <input onClick={clickHandler} onChange={changeHandler} name="password" value={values.password} />
                            { errors.password && isToched.password && <span className={styles.error}>{errors.password}</span>}
                        </div>
        
                        <div className={styles.row}>
                            <label> تایید رمز ورود</label>
                            <input onClick={clickHandler} onChange={changeHandler} name="confirmPassword" value={values.confirmPassword} />
                            { errors.confirmPassword && isToched.confirmPassword && <span className={styles.error}>{errors.confirmPassword}</span>}
                        </div>
        
                        <button type="submit">
                            {
                                aouthed === "forming" ? "ارسال" :<img src={loader3} />
                            }
                           
                        </button>
        
                        <div className={styles.hintLogin}>
                            <p>   قبلا ثبت نام کرده اید ؟</p>
                            <Link  to="/login">ورود</Link>
                        </div>
        
                    </form>
                    <div className={styles.leftLogin}>
                        <div className={styles.loginImage}>
                            <img src={loginIcon} alt="icon"/>
                        </div>
                        <h5>ساخت حساب کاربری</h5>
                    </div>
                </div>
            </div>
                <div  className={styles.formBackground}></div>
        </div> 
    );
};

export default Signup;


