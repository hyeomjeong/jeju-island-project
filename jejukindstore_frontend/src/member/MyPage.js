import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';

import {getAPI, updateAPI} from '../common/API';

import CommentList from '../comment/CommentList';
import Profile from './Profile';
import './MyPage.css';

const MyPage = (props) => {
    const {status: logStatus} = useSelector(state => state.status);
    const [id, setID] = useState(0);

    useEffect(() => {
        if(logStatus){
            const decoded = jwtDecode(sessionStorage.getItem('Authorization'));
            // console.log(decoded);
            setID(decoded.userId);
            console.log(id);
        }
    }, [logStatus]);

    return(
        <div>
            { logStatus && id !== 0 ?  
            <div className="my-page">
                
                <Profile userId={id}/>
                
                <hr className="middle-line"/>
                 
                <div className="my-comment-list">
                    <CommentList userId={id} />
                </div>
                
            </div> : null}
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