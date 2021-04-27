
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getAPI, deleteAPI } from '../common/API';
import SearchBox from '../searchBox/SearchBox';
import './common.css';

const Header = (props) => {
    const [logStatus, setStatus] = useState(false);
    
    const [user, setUser] = useState({
        nickname: "",
        email: "",
        phone: ""
    });

    useEffect(() => {
        setStatus(props.data);
        if(props.data){
            setUser(getAPI("/api/v1/session/userData"));
        }
    }
    , [props.data]);

    const signOut = () => {
        deleteAPI("/api/v1/session");
        window.sessionStorage.clear();
        
        setUser({
            nickname: "", 
            email: "", 
            phone: ""
        });
        
        setStatus(false);
        props.check(window.sessionStorage.getItem("session"));
    }
   
    return(
        <div className="common-header">
            <div className="common-header item">
                <button><Link to="/" className="links">🧚‍♂️JEJU-KIND-STORE🍊</Link></button>
            </div>
            <div className="common-header item">
                <SearchBox />
            </div>
            <div className="common-header item">
            { logStatus ? 
                <div className="sign-in-out-info">
                    <button className="user-btn"><Link to="/memeber/my-page" className="links">{user.nickname}</Link></button>
                    <button className ="sign-btn" onClick={signOut}>SIGN OUT</button>
                </div> 
                :
                <div className="sign-in-out-info">
                    <button><Link to= '/member/sign-up' className="links">SIGN UP</Link></button>
                    <button><Link to= '/member/sign-in' className="links">SIGN IN</Link></button>
                </div>
            }
            </div>
        </div>
    );
};

export default Header;