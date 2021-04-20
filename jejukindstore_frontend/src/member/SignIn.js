import React, {useState, useEffect} from 'react';

import './SignIn.css';

const SighIn = (props) =>{

    const [check, setCheck] = useState({
        id: false,
        nickname: true,
        email: true,
        phone: true
    });

    const [newMember, setMember] = useState({
        id: "",
        password: "",
        nickname: "",
        email: "",
        phone: ""
    })

    const {id, password, nickname, email, phone} = newMember;

    const onChange = (e) => setMember({...newMember, [e.target.name]: e.target.value})

    const join = () => {
        if (id === "" || !check.id){
            alert("ID를 확인해주세요!!");
            return;
        }
        if (password === ""){
            alert("PASSWORD를 입력해주세요!!");
            return;
        }
        if (nickname === "" || !check.nickname){
            alert("닉네임를 확인해주세요!!");
            return;
        }
        if (email === "" || !check.email){
            alert("E-MAIL을 확인해주세요!!");
            return;
        }
        if (phone === "" || !check.phone){
            alert("PHONE을 확인해주세요!!");
            return;
        }
        // newMember data post
        // 가입완료 페이지 -> 로그인 X
    }

    const checkOverlap = (name) => {
        // get isOverlap 
    }

    return(
        <div className="sign-in-inputs">
            <div className="sign-in-input">
                <p className="input-name">ID</p>
                <input name="id" value={id} onChange={onChange} onBlur={() => {checkOverlap("id")}}></input>
                <p className="warning-msg">{ id === "" ? "필수 정보입니다." : ( check.id ? '' : "이미 사용중인 아이디입니다.")}</p>
            </div>
            <div className="sign-in-input">
                <p className="input-name">PASSWORD</p>
                <input name="password" value={password} onChange={onChange} type="password"></input>
                <p className="warning-msg">{ password === "" ? "필수 정보입니다." : ''}</p>
            </div>
            <div className="sign-in-input">
                <p className="input-name">NICKNAME</p>
                <input name="nickname" value={nickname} onChange={onChange} onBlur={() => {checkOverlap("nickname")}}></input>
                <p className="warning-msg">{ nickname === "" ? "필수 정보입니다." : ( check.nickname ? '' : "이미 사용중인 닉네임입니다.")}</p>
            </div>
            <div className="sign-in-input">
                <p className="input-name">E-MAIL</p>
                <input name="email" value={email} onChange={onChange} onBlur={() => {checkOverlap("email")}}></input>
                <p className="warning-msg">{ email === "" ? "필수 정보입니다." : ( check.email ? '' : "이미 사용중이거나 잘못된 형식의 이메일입니다.")}</p>
            </div>
            <div className="sign-in-input">
                <p className="input-name">PHONE</p>
                <input name="phone" value={phone} onChange={onChange} onBlur={() => {checkOverlap("phone")}}></input>
                <p className="warning-msg">{ phone === "" ? "필수 정보입니다." : ( check.phone ? '' : "이미 사용중이거나 잘못된 번호 형식입니다.")}</p>
            </div>
            <button className="join-btn" onClick={join}>가입</button>
        </div>
    );
}

export default SighIn;