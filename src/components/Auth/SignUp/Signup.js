import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom"
import './Signup.css';

import { postSignUp } from "../../../Utils/apirequests";



import TextField from '@material-ui/core/TextField';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

function Signup() {

    const linkStack = useHistory();

    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [passwordVisibility, setPasswordVisibility] = useState("hidden");

    const [nameError, setNameError] = useState({ msg: "", validity: false })
    const [emailError, setEmailError] = useState({ msg: "", validity: false })
    const [passwordError, setPasswordError] = useState({ msg: "", validity: false })
    const [confPasswordError, setConfPasswordError] = useState({ msg: "", validity: false })

    const [style, setStyle] = useState();
    var temp;
    const clickRedirection = () => {
        setStyle({
            transform: "translateX(-100vw)",
            opacity: "0"
        })
        temp = setTimeout(() => { linkStack.replace("/login") }, 500)
    }
    
    useEffect(() => {
        setStyle({
            transform: "translateX(0)",
            opacity: "1"
        })
    }, [])

    const validateField = (fieldName, value, event) => {
        switch (fieldName) {
            case 'name':
                if (value === "") {
                    setNameError({ msg: "Required!", validity: false });
                }
                else {
                    setNameError({ msg: "", validity: true });
                    setName(event.target.value)
                };
                break;

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

            case 'confirmPassword':
                if (password !== value) {
                    setConfPasswordError({ msg: "Password doesn't match!", validity: false })
                }
                else {
                    setConfPasswordError({ msg: "", validity: true })
                }
                break;

            default:
                break;

        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        postSignUp(name, password, email)
    }



    return (
        <div className="Auth_Card_Right" style={style} >
            <h1>Ekank</h1>
            <form className="Auth_inputs" noValidate autoComplete="off">
                <div>
                    <TextField id="standard-basic" label="Full Name" onKeyDown={(e) => { validateField("name", e.target.value, e) }} />
                    {nameError.msg ? <p>{nameError.msg}</p> : null}
                </div>
                <div>
                    <TextField id="standard-basic" label="Email" onKeyDown={(e) => { validateField("email", e.target.value, e) }} />
                    {emailError.msg ? <p>{emailError.msg}</p> : null}
                </div>
                <div>
                    <TextField type={passwordVisibility === "hidden" ? "password" : "text"} id="standard-basic" label="Password" onKeyDown={(e) => { validateField("password", e.target.value, e) }} />
                    {passwordError.msg ? <p>{passwordError.msg}</p> : null}
                    {passwordVisibility === "hidden" ? <span onClick={() => { setPasswordVisibility("show") }}> <VisibilityIcon /></span> : <span onClick={() => { setPasswordVisibility("hidden") }}> <VisibilityOffIcon /></span>}
                </div>
                <div>
                    <TextField type={passwordVisibility === "hidden" ? "password" : "text"} id="standard-basic" label="Confirm Password" onKeyDown={(e) => { validateField("confirmPassword", e.target.value, e) }} />
                    {confPasswordError.msg ? <p>{confPasswordError.msg}</p> : null}
                </div>
                <button disabled={!(nameError.validity && emailError.validity && passwordError.validity && confPasswordError.validity)} onClick={(e) => submitHandler(e)} className="Auth_button">Sign Up</button>
                <p style={{ color: "gray", marginTop: "1rem" }}>Already registered? <span onClick={clickRedirection} style={{ color: "#014A7E", cursor: "pointer" }} >Login</span> here! </p>
            </form>
        </div>
    )
}

export default Signup
