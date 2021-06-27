import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import "./Login.css"

import { postSignUp } from "../../../Utils/apirequests";

import TextField from '@material-ui/core/TextField';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

function Signup() {

    const linkStack = useHistory();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [passwordVisibility, setPasswordVisibility] = useState("hidden");
    
    const [emailError, setEmailError] = useState({ msg: "", validity: false })
    const [passwordError, setPasswordError] = useState({ msg: "", validity: false })
    const [style, setStyle] = useState();


     useEffect(() => {
         setStyle({
            transform: "translateX(0)",
            opacity: "1"
        })
    }, [])

    
    
    const validateField = (fieldName, value, event) => {
        switch (fieldName) {

            case 'email':
                if (value === "") {
                    setEmailError({ msg: "Required!", validity: false })
                }

                else if (!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                    setEmailError({ msg: "Enter a valid email address.", validity: false });
                }
                else {
                    setEmailError({ msg: "", validity: true });
                    setEmail(event.target.value)
                }
                break;

            case 'password':
                if (value.length < 6) {
                    setPasswordError({ msg: "Password is too short!", validity: false })
                }
                else {
                    setPasswordError({ msg: "", validity: true });
                    setPassword(event.target.value);
                }
                break;

            default:
                break;

        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        postSignUp( password, email)
    }

    const clickRedirection = () => {
        setStyle({
            transform: "translateX(-50vw)",
            opacity: "0"
        })
        setTimeout(() => {linkStack.replace("/signup")}, 400)
        
    }


    return (
        <div className="Auth_Card_Right" >
            <h1>EKANK</h1>
            <form className="Auth_inputs" noValidate autoComplete="off" style={style} >
                
                <div>
                    <TextField id="standard-basic" label="Email" onKeyDown={(e) => { validateField("email", e.target.value, e) }} />
                    {emailError.msg ? <p>{emailError.msg}</p> : null}
                </div>
                <div>
                    <TextField type={passwordVisibility === "hidden" ? "password" : "text"} id="standard-basic" label="Password" onKeyDown={(e) => { validateField("password", e.target.value, e) }} />
                    {passwordError.msg ? <p>{passwordError.msg}</p> : null}
                    {passwordVisibility !== "hidden" ? <span onClick={() => { setPasswordVisibility("hidden") }}> <VisibilityIcon /></span> : <span onClick={() => { setPasswordVisibility("show") }}> <VisibilityOffIcon /></span>}
                </div>
               
                <button disabled={!( emailError.validity && passwordError.validity )} onClick={(e) => submitHandler(e)} className="Auth_button">Login</button>
                <p style={{ color: "gray", marginTop: "1rem" }}>Not registered yet? <span onClick={clickRedirection} style={{color: "#014A7E" ,cursor: "pointer"}} >Signup</span> here! </p>
            </form>
        </div>
    )
}

export default Signup
