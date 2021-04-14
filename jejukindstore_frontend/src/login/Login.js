import React, {useState} from 'react';

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
        
    }

    const keyPress = (e) => {
        if(e.key === "Enter")
            login();
    }

    return(
        <div className="login-info-input">
            <div>
                <input className="user-id" name={id} value={id} placeholder="ID" onKeyPress={keyPress} onChange={onChange}></input>
                <input className="user-password" name={password} value={password} placeholder="PASSWORD" onKeyPress={keyPress} onChange={onChange} type="password"></input>
            </div>
            <button className="login-btn" onClick={login}>LOGIN</button>
        </div>
    );
}

export default Login;