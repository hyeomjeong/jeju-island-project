import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import * as actions from '../actions/status';
import {getAPI, deleteAPI} from '../common/API';

const Profile = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const userId= props.userId;
    const [user, setUser] = useState({
        id: "",
        nickname: "",
        password: "",
        phone: "",
        email: ""
    });

    const {id, nickname, password, phone, email} = user;

    useEffect(() => {
        const getUser = async() => {
            console.log(userId);
            setUser(await getAPI('/api/v1/user/' + userId));
            console.log(user);
        }
        getUser();
    }, [props.userId]);


    async function withdrawal(){
        if (await deleteAPI('/api/v1/user/' + userId)){
            sessionStorage.clear();
            dispatch(actions.signOut());
            alert("탈퇴가 완료되었습니다.");
            history.push('/');
        }
    }

    const update = () => {
        console.log(user);
        history.push({
            pathname: "/member/modify",
            state: {
                member: user, 
                userId: userId
            }
        })
    }

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

                <button className="modify-btn" onClick={update}>수정</button>
                <button onClick={withdrawal}>회원탈퇴</button>
            </div>
    );
}


export default Profile;