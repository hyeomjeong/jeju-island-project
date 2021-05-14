
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import * as actions from '../actions/status';
import { getAPI, deleteAPI } from '../common/API';
// import sessionContext from './SessionContext';
// import useInput from '../c_Hooks/useInput';

import './common.css';
import SearchBox from '../searchBox/SearchBox';

const Header = (props) => {
    const dispatch = useDispatch();
    const { status: logStatus } = useSelector((state) => state.status);
    const [nickname, setNickname] = useState("");
    // console.log(logStatus);
    useEffect(async function(){
        // get User info
        if(logStatus){
            console.log("HEADER");
            // console.log(sessionStorage.getItem('Authorization'));
            const decoded = jwtDecode(sessionStorage.getItem('Authorization'));
            setNickname(decoded.nickname);
            // console.log(decoded);
        }
    }
    , [logStatus]);

    const signOut =  () => {
        sessionStorage.clear();
        dispatch(actions.signOut());
        setNickname("");
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
                    <button><Link to="/member/my-page" className="links">{nickname}</Link></button>
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