import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import jwtDecode from 'jwt-decode';

import Score from '../kindstore/Score';
import './comment.css';

import SettingsIcon from '@material-ui/icons/Settings';
import DeleteIcon from '@material-ui/icons/Delete';

// comment link to "store/store_id"
const Comment = (props) => {
    const { status: logStatus } = useSelector((state) => state.status);
    const comment = props.comment;
    const history = useHistory();
    // console.log(props);
    const { id, storeId, userNickName, storeName, score, content, register_date, remove_date, update_date} = comment;
    const nickname = logStatus ? jwtDecode(sessionStorage.getItem('Authorization')).nickname : "" ;
    console.log(comment);
    return(
        (remove_date === null) && <div className="comment">
            
            <div className="flex-row">
            {storeName !== undefined ? 
                    <Link to="/" className="store-link">{storeName}</Link>
                    : 
                    <p className="comment-name">{userNickName}</p>}
            
            <div className="comment-rating">
                <Score font="material-icons md-18" data={score}/>
            </div>
            
            </div>
            <p className="comment-date">{update_date === null ? register_date : update_date}</p>
            <p className="comment-content">{content}</p>
            
            { nickname === userNickName && 
                    <div className="comment-btns" >
                        <div title="수정"><SettingsIcon onClick={() => {history.push({pathname: "/comment", state: {comment}, })}} /></div>
                        <div title="삭제"><DeleteIcon onClick={() => {props.deleteComment(comment)}} /></div>
                    </div>}
            <hr className="thin-line"></hr>
        </div>
    );
}

export default Comment;
