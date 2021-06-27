import React from 'react';
import Signup from "./SignUp/Signup";
import Login from "./Login/Login";
import "./Auth.css";


import signupImg from '../../Assests/login.1232c0e7.svg';
import backImg from '../../Assests/pencils-762555_1920.jpg';
import { Switch, Route, Redirect } from 'react-router-dom';

function Auth() {
    return (
        <div className="Signup" style={{ backgroundImage: `url(${backImg})` }}>
            <div className="Signup_Card">
                <div className="Signup_Card_Img">
                    <img src={signupImg} alt="" />
                </div>
                <Switch>
                    <Route  path="/signup" > <Signup/> </Route>
                    <Route  path="/login"  > <Login/> </Route>
                </Switch>
            </div>
        </div>
    )
}

export default Auth
