import React, {useState} from 'react';
import useInput from '../c_Hooks/useInput';
import {headAPI, putAPI} from '../common/API';

const Modify = (props) => {
    const userId = props.location.state.userId;
    const preInfo = props.location.state.member;
    const [newInfo, setInfo] = useInput(preInfo);

    const [check, setCheck] = useState({
        nickname: true,
        email: true,
        phone: true
    });

    const {id, nickname, password, phone, email} = newInfo;

    const onChange = (e) => {
        // console.log(e.target.name, "->" ,e.target.value);
        setInfo(e);
        checkOverlap(e);
    }

    const modify = async() => {
        if (password === ""){
            alert("PASSWORD를 입력해주세요!!");
            return;
        }
        if (nickname === "" || !check.nickname){
            alert("닉네임을 확인해주세요!!");
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
        if(await putAPI("/api/v1/user/"+ userId, newInfo)){
            // 수정완료
        };
    }
    
    const checkOverlap = async(e) => {
        const {name, value} = e.target;

        if(newInfo[name] === preInfo[name]){
            setCheck({
                ...check, [name]: true
            });
            return;
        }
        
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
        if(await headAPI("/api/v1/user", {name: value})){
            
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
        <div className="">
            <h3>프로필 수정</h3>
            <div className="flex-col">
                <p className="input-name">닉네임</p>
                <input name="nickname" value={nickname} onChange={onChange}/>
                <p className={check.nickname? "collect-msg" : "warning-msg"}>{ nickname === "" ? "필수 정보입니다." : ( check.nickname ? "좋아유" : "이미 사용중입니다.")}</p>
            
                </div>
            
            <div className="flex-col">
                <p className="input-name">비밀번호</p>
                <input name="password" type="password" value={password} onChange={onChange}/>
                </div>
            
            <div className="flex-col">
                <p className="input-name">휴대폰</p>
                <input name="phone" value={phone} onChange={onChange}/>
                <p className={check.phone? "collect-msg" : "warning-msg"}>{ phone === "" ? "필수 정보입니다." : ( check.phone ? null : "이미 사용중이거나 형식에 맞지 않는 번호입니다.")}</p>
            </div>
            
            <div className="flex-col">
                <p className="input-name">이메일</p>
                <input name="email" value={email} onChange={onChange}/>
                <p className={check.email? "collect-msg" : "warning-msg"}>{ email === "" ? "필수 정보입니다." : ( check.email ? null : "이미 사용중이거나 형식에 맞지 않는 이메일입니다.")}</p>
            </div>
            <button onClick={modify}>수정</button>
        </div>
    );
}

Modify.defaultProps ={
    
    member : {
        id: "id",
        nickname: "정현구",
        password: "",
        phone: "01059595959",
        email: "5959@gmail.com",
    }
}

export default Modify;