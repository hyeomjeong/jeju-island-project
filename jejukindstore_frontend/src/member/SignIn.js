import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

import { postAPI } from '../common/API';
import useInput from '../c_Hooks/useInput';
import './SignIn.css';

const SignIn = (props) => {
    const history = useHistory();
    const [user, setUser] = useInput({
        userId: "",
        userPassword: ""
    });

    const {userId, userPassword} = user;

    async function signIn(){
        
        if (userId === ""){
            alert("ID를 입력하십시오!!");
            return;
        }
        if (userPassword === ""){
            alert("PASSWORD를 입력하십시오!!");
            return;
        }
        // BackEnd - chk -> setSession
        const res = await postAPI("/api/v1/session", user);
        window.sessionStorage.setItem("session", res);
        // window.sessionStorage.setItem("session", "1234");
        console.log("session -> ", window.sessionStorage.getItem("session"));
        props.check(window.sessionStorage.getItem("session"));
        history.goBack();
    }

    const keyPress = (e) => {
        if(e.key === "Enter")
            signIn();
    }

    return(
        <div className="sign-in-page">
            <div className="sign-in">
                <div className="sign-in-inputs">
                    <input className="user-id" name="userId" value={userId} placeholder="ID" onKeyPress={keyPress} onChange={setUser}></input>
                    <input className="user-password" name="userPassword" value={userPassword} placeholder="PASSWORD" onKeyPress={keyPress} onChange={setUser} type="password"></input>
                </div>
                <button className="sign-in-btn" onClick={signIn}>LOGIN</button>
            </div>
            <button className="find-member-btn"><Link to= '/member/find' className="find-member-btn">ID/PASSWORD찾기</Link></button>

        </div>
    );
}

export default SignIn;