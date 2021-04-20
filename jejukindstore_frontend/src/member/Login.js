import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './Login.css';

const crypto = require('crypto');

function hash(password) {
    return crypto.createHmac('sha256', process.env.REACT_APP_SECRET_KEY).update(password).digest('hex');
}

const Login = (props) => {
    const [user, setUser] = useState({
        id: "",
        password: ""
    });

    const {id, password} = user;

    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const login = () => {
        
        if (id === ""){
            alert("ID를 입력하십시오!!");
            return;
        }
        if (password === ""){
            alert("PASSWORD를 입력하십시오!!");
            return;
        }
        // BackEnd - chk -> cookie
        console.log(props);
        props.login(hash(password));
        
    }

    const keyPress = (e) => {
        if(e.key === "Enter")
            login();
    }

    return(
        <div className="login-page">
            <div className="">
                <div className="login-inputs">
                    <input className="user-id" name="id" value={id} placeholder="ID" onKeyPress={keyPress} onChange={onChange}></input>
                    <input className="user-password" name="password" value={password} placeholder="PASSWORD" onKeyPress={keyPress} onChange={onChange} type="password"></input>
                </div>
                <button className="login-btn" onClick={login}>LOGIN</button>
            </div>
            
            <div className="">
                <button><Link to= '/FindMember'>ID/PASSWORD찾기</Link></button>
            </div>
        </div>
    );
}

export default Login;