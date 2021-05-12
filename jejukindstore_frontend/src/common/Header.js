
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';

import * as actions from '../actions/status';
import { getAPI, deleteAPI } from '../common/API';
// import sessionContext from './SessionContext';
// import useInput from '../c_Hooks/useInput';

import './common.css';
import SearchBox from '../searchBox/SearchBox';

const Header = (props) => {
    const dispatch = useDispatch();
    const [user, setUser] = useState("");
    const { status: logStatus } = useSelector((state) => state.status);
    // console.log(logStatus);
    useEffect(() => {
        // get User info
        if(logStatus){
            // const decoded = jwtDecode(session);
            // setUser(decoded.nickname);
            setUser("임시");
        }
    }
    , [logStatus]);

    const signOut =  () => {
        dispatch(actions.signOut());
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
                    <button><Link to="/member/my-page" className="my-page-link">{user}</Link></button>
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