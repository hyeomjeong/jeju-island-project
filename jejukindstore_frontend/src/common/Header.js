import React, { useEffect, useState } from 'react';
import Login from '../member/Login';
import SearchBox from '../searchBox/SearchBox';
import { Link } from 'react-router-dom';
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
                    <button><Link to= '/member/sign-up' className="links">SIGN-UP</Link></button>
                    <button><Link to= '/member/login' className="links">LOGIN</Link></button>
                </div>
                    :
                <div className="login-out-info">
                    <button className="user-btn"><Link to="/memeber/my-page" className="links">{user.userID}</Link></button>
                    <button className ="login-btn" onClick={logout}>LOGOUT</button>
                </div> 
            }
            </div>
        </div>
    );
};

export default Header;