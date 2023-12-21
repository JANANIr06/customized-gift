import React from "react";
import './Signup.css';
import {Link} from 'react-router-dom'
//import { FaUser,FaLock } from "react-icons/fa";
const Login=()=>{
    return(
        <div className="wra">
        <div className="wrapper">
            <form action="">
                <h1>Signup</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required/>
            
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                    
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Confirm Password" required/>
                    
                </div>
                <button type="submit">Login</button>
                <div className="register-link">
                    <p>Or <br/><button type="submit"><Link to='/ResponsiveAppBar'>Signup</Link></button></p>
                </div>
            </form>
         </div>
         </div>
    );
}
export default Login;
