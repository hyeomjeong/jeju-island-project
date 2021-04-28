import React, {useState} from 'react';
import useInput from '../c_Hooks/useInput';

const Modify = (props) => {
    
    const [modifyInfo, setInfo] = useInput(props.member);

    const [check, setCheck] = useState({
        nickname: true,
        email: true,
        phone: true
    });

    const {nickname, password, phone, email} = modifyInfo;

    async function modify(){

    }

    return(
        <div className="">
            <h3>프로필 수정</h3>
            <div className="flex-col">
                <p className="input-name">닉네임</p>
                <input name="nickname" value={nickname} onChange={setInfo}/>
                </div>
            
            <div className="flex-col">
                <p className="input-name">비밀번호</p>
                <input name="password" type="password" value={password} onChange={setInfo}/>
                </div>
            
            <div className="flex-col">
                <p className="input-name">휴대폰</p>
                <input name="phone" value={phone} onChange={setInfo}/>
                <p className={check.phone? "collect-msg" : "warning-msg"}>{ phone === "" ? "필수 정보입니다." : ( check.phone ? null : "이미 사용중이거나 형식에 맞지 않는 번호입니다.")}</p>
            </div>
            
            <div className="flex-col">
                <p className="input-name">이메일</p>
                <input name="email" value={email} onChange={setInfo}/>
                <p className={check.email? "collect-msg" : "warning-msg"}>{ email === "" ? "필수 정보입니다." : ( check.email ? null : "이미 사용중이거나 형식에 맞지 않는 이메일입니다.")}</p>
            </div>
            <button onClick={modify}>수정</button>
        </div>
    );
}

Modify.defaultProps ={
    member : {
        nickname: "정현구",
        password: "",
        phone: "01059595959",
        email: "5959@gmail.com",
    }
}

export default Modify;