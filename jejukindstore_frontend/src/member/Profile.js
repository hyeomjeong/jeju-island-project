import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import {getAPI} from '../common/API';



const Profile = (props) => {
    const [user, setUser] = useState({
        id: "",
        nickname: "",
        phone: "",
        email: ""
    });

    const {id, nickname, phone, email} = user;
    useEffect(async function(){
        setUser(await getAPI('/api/v1/user?nickname=' + props.nickname));
    }, [props.nickname])

    return(
        <div className="center">
                <h3>PROFILE</h3>
                <div>
                    <div className="flex-row">
                        <p className="info-type">🌸아이디🍒</p>
                        <p className="my-info">{id}</p>
                    </div>
                    <div className="flex-row">
                        <p className="info-type">👾닉네임🤔</p>
                        <p className="my-info">{nickname}</p>
                    </div>
                    <div className="flex-row">
                        <p className="info-type">🔎휴대폰📞</p>
                        <p className="my-info">{phone}</p>
                    </div>
                    <div className="flex-row">
                        <p className="info-type">💻이메일📫</p>
                        <p className="my-info">{email}</p>
                    </div>
                </div>

                <button className="modify-btn"><Link to="/member/modify" className="links">수정</Link></button>
            </div>
    );
}


export default Profile;