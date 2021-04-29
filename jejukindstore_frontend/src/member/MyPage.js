import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

import {getAPI, updateAPI} from '../common/API';

import CommentList from '../comment/CommentList';
import './MyPage.css';

const MyPage = (props) => {
    // props로 내 댓글 목록, 회원 정보 받아오거나 여기서 처음에 받아옴 일단 defaultProps로 처리
    const [user, setUser] = useState(props.member);

    const {id, nickname, phone, email} = user;

    

    useEffect(async function(){   
        const decoded = jwtDecode(Cookies.get('Authorization').split(' ')[1]);
        setUser(await getAPI('/api/v1/user?nickname=' + decoded.nickname));
    }, []);


    const [my_comments, setComments] = useState(props.comments);

    const setComment = (newComment) => {
        setComments(newComment);
    }

    return(
        <div className="my-page">
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
            
            <hr className="middle-line"/>
            <div className="my-comment-list">
                <CommentList user={nickname} data={my_comments} setComment={setComment}/>
            </div>
        </div>
    );
}

MyPage.defaultProps = {
    member: {
        id: "test-id",
        nickname: "test-nickname",
        phone: "01012345678",
        email: "test@test.com"
    },
    comments: [
        {
            storeName: "엽기떡볶이",
            date: "2021-04-27",
            rating: 5,
            content: "로제 떡볶이 먹고싶다. 당면 추가해서 오리지널 맛으로다가... 배고파.."
        },
        {
            storeName: "굽네치킨",
            date: "2021-04-27",
            rating: 5,
            content: "고추바사삭은 다이어트 식품이래 4조각 먹으면 살 안찐다는데, 지금 먹어도 되지 않을까?"
        }
    ]
}

export default MyPage;