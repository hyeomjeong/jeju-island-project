
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

import { getAPI, deleteAPI } from '../common/API';
import useInput from '../c_Hooks/useInput';
import SearchBox from '../searchBox/SearchBox';
import './common.css';
import jwtDecode from 'jwt-decode';

const Header = (props) => {

    const [logStatus, setStatus] = useState(props.status);
    
    const [user, setUser] = useState("");

    useEffect(() => {
        // get User info
        // console.log(Cookies.get('Authorization'));
        setStatus(props.status);
        if(props.status){
            const decoded = jwtDecode(Cookies.get('Authorization').split(' ')[1]);
            console.log(decoded.nickname);
            setUser(decoded.nickname);
        }
    }
    , [props.status]);

    const signOut = () => {
        Cookies.remove('Authorization');
        props.setLog();
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
            { logStatus ? 
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