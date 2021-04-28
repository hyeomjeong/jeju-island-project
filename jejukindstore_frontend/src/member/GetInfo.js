import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

import useInput from '../c_Hooks/useInput';
import { postAPI, headAPI } from '../common/API';

import './SignUp.css';

const SignUp = (props) =>{
    const history = useHistory();

    const [isSuccess, setSuccess] = useState(false);

    const [check, setCheck] = useState({
        id: false,
        nickname: false,
        email: false,
        phone: false
    });

    const [newMember, setMember] = useInput({
        id: "",
        password: "",
        nickname: "",
        email: "",
        phone: ""
    })

    const {id, password, nickname, email, phone} = newMember;

    const onChange = (e) => {
        // console.log(e.target.name, "->" ,e.target.value);
        setMember(e);
        checkOverlap(e);
    }

    async function join(){
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
        if(await postAPI("/api/v1/user", newMember)){
            setSuccess(true);
        };
        // 가입완료 페이지 -> 로그인 X
    }
    
    async function checkOverlap(e){
        const {name, value} = e.target;
        
        if (value === ""){
            setCheck({
                ...check, [name]: false
            });
            return;
        }
            
        // 유효성 검사
        if (name === "email" && !checkEmail(value)){
            setCheck({
                ...check, [name]: false
            });
            return;
        }
            
        else if (name === "phone" && !checkPhone(value)){
            setCheck({
                ...check, [name]: false
            });
            return;
        }

        // 중복 확인 
        if(!await headAPI("/api/v1/user?"+name+"="+value)){
            
            setCheck({
                ...check, [name]: true
            });

            return;
        }

        setCheck({
            ...check, [name]: false
        });
    }

    const checkEmail = (str) => {
        var regExp = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
        return regExp.test(str) ? true : false;
    }
    
    const checkPhone = (str) => {
        var regExp = /^\d{2,3}\d{3,4}\d{4}$/;
        return regExp.test(str) ? true : false;
    }

    return(
        <div className="sign-up-page">
            { isSuccess ? 
                <div className="sign-up-success">
                    <p>🙋‍♀️완료되었습니다🎉</p>
                    <button onClick={() => {history.goBack()}}>BACK</button>
                </div>
                :
                <div className="sign-up-inputs">
                    <div className="sign-up-input">
                        <p className="input-name">ID</p>
                        <input name="id" value={id} onChange={onChange} onBlur={checkOverlap}></input>
                        <p className={check.id && id !== ""? "collect-msg" : "warning-msg"}>{ id === "" ? "필수 정보입니다." : ( check.id ? "멋진 아이디군요!" : "이미 사용중인 아이디입니다.")}</p>
                    </div>
                    <div className="sign-up-input">
                        <p className="input-name">PASSWORD</p>
                        <input name="password" value={password} onChange={setMember} type="password"></input>
                        <p className={password ? "collect-msg" : "warning-msg"}>{ password === "" ? "필수 정보입니다." : "강력한 암호입니다!"}</p>
                    </div>
                    <div className="sign-up-input">
                        <p className="input-name">NICKNAME</p>
                        <input name="nickname" value={nickname} onChange={onChange} onBlur={checkOverlap}></input>
                        <p className={check.nickname? "collect-msg" : "warning-msg"}>{ nickname === "" ? "필수 정보입니다." : ( check.nickname ? '센스있는 닉네임이네요~' : "이미 사용중인 닉네임입니다.")}</p>
                    </div>
                    <div className="sign-up-input">
                        <p className="input-name">E-MAIL</p>
                        <input name="email" value={email} onChange={onChange} onBlur={checkOverlap}></input>
                        <p className={check.email? "collect-msg" : "warning-msg"}>{ email === "" ? "필수 정보입니다." : ( check.email ? '올바른 형식입니다.' : "이미 사용중이거나 형식에 맞지 않는 이메일입니다.")}</p>
                    </div>
                    <div className="sign-up-input">
                        <p className="input-name">PHONE</p>
                        <input name="phone" value={phone} onChange={onChange} onBlur={checkOverlap} placeholder="숫자만 입력해주십시오."></input>
                        <p className={check.phone? "collect-msg" : "warning-msg"}>{ phone === "" ? "필수 정보입니다." : ( check.phone ? '올바른 형식입니다.' : "이미 사용중이거나 형식에 맞지 않는 번호입니다.")}</p>
                    </div>
                    <button className="join-btn" onClick={join}>가입</button>
                </div>
            }
        </div>
        
    );
}



export default SignUp;