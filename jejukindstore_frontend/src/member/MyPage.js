import React, { useState, useMemo } from 'react';
import {Link} from 'react-router-dom';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

import {getAPI, updateAPI} from '../common/API';

import CommentList from '../comment/CommentList';
import Profile from './Profile';
import './MyPage.css';

const MyPage = (props) => {
    // props로 내 댓글 목록, 회원 정보 받아오거나 여기서 처음에 받아옴 일단 defaultProps로 처리
    const nickname = Cookies.get('Authorization') === undefined ? undefined : jwtDecode(Cookies.get("Authorization")).nickname;
    
    const [my_comments, setComments] = useState(props.comments);

    const setComment = (newComment) => {
        setComments(newComment);
    }

    return(
        nickname !== undefined &&
        <div className="my-page">
            <Profile nickname={nickname}/>
            <hr className="middle-line"/>
            <div className="my-comment-list">
                <CommentList user={nickname} data={my_comments} setComment={setComment}/>
            </div>
        </div>
    );
}

MyPage.defaultProps = {
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