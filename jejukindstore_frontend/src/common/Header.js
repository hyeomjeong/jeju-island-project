import React, { useEffect, useState } from 'react';
import Login from '../member/Login';
import SearchBox from '../searchBox/SearchBox';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './common.css';

const Header = (props) => {

    const [user, setUser] = useState({
        userID: "",
        sessionID: ""
    });
    
    const logout = () => setUser({userID: "", sessionID: ""});
    const login = (userInfo) => setUser(userInfo);

    // submit INPUTS to BackEND
    const API = () => {
        console.log("submit tags");
    }

    return(
        <div className="common-header">
            <div className="common-header item">
                <h>🧚‍♂️JEJU-KIND-STORE🍊</h>
            </div>
            <div className="common-header item">
                <SearchBox />
            </div>
            <div className="common-header item">
            { user.sessionID === "" ? 
                <div className="login-out-info">
                    <button><Link to= '/Sign-in' className="links" login={login}>SIGN-IN</Link></button>
                    <button><Link to= '/Login' className="links">LOGIN</Link></button>
                </div>
                    :
                <div className="login-out-info">
                    <button className="user-btn"><Link to="/My-page" className="links">{user.userID}</Link></button>
                    <button className ="login-btn" onClick={logout}>LOGOUT</button>
                </div> 
            }
            </div>
        </div>
    );
};

export default Header;