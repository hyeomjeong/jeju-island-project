
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';

import { getAPI, deleteAPI } from '../common/API';
import sessionContext from './SessionContext';
// import useInput from '../c_Hooks/useInput';

import './common.css';
import SearchBox from '../searchBox/SearchBox';

const Header = (props) => {

    const [session, setSession] = useContext(sessionContext);
    const [user, setUser] = useState("");

    useEffect(() => {
        // get User info
        // console.log(Cookies.get('Authorization'));
        
        if(typeof session !== 'undefined'){
            // console.log("header -> ", Cookies.get('Authorization'));
            const decoded = jwtDecode(session);
            // console.log(decoded.nickname);
            setUser(decoded.nickname);
        }
    }
    , [session]);

    const signOut = () => {
        session = ""
        // props.setLog(false);
        setUser("");
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
            { user !== "" ? 
                <div className="sign-in-out-info">
                    <button className="user-btn"><Link to="/member/my-page" className="links">{user}</Link></button>
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