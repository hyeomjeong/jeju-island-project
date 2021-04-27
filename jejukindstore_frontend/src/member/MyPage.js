import React, { useState } from 'react';
import {updateAPI} from '../common/API';

import CommentList from '../store/comment/CommentList';

const MyPage = (props) => {
    // props로 내 댓글 목록, 회원 정보 받아오거나 여기서 처음에 받아옴 일단 defaultProps로 처리
    const [member, setMember] = useState(props.member);

    const { id, nickname, phone, email } = member;

    const [my_comments, setComments] = useState(props.comments);

    const setComment = (newComment) => {
        setComments(newComment);
    }

    return(
        <div>
            <div className="profile">
                <h>PROFILE</h>
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
            <hr className="middle-line"/>
            <div className="my-comment-list">
                <CommentList data={my_comments} setComment={setComment}/>
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