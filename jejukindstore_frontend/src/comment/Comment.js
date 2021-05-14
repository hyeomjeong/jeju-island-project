import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import jwtDecode from 'jwt-decode';

import Score from '../kindstore/Score';
import './comment.css';

import SettingsIcon from '@material-ui/icons/Settings';
import DeleteIcon from '@material-ui/icons/Delete';

// comment link to "store/store_id"
const Comment = (props) => {
    const {status: logStatus} = useSelector(state => state.status);
    const comment= props.comment;
    const { id, storeId, userNickName, StoreName, score, content, register_date, remove_date, update_date} = comment;
    const [nickname, setName] = useState("");

    useEffect(async function(){
        if(logStatus){
            const decoded = jwtDecode(sessionStorage.getItem('Authorization'));
            setName(decoded.nickname);
        }
    }, [logStatus]);
    return(
        (remove_date !== "") && <div className="comment">
            
            <div className="flex-row">
            {StoreName !== undefined ? 
                    <Link to="/" className="store-link">{StoreName}</Link>
                    : 
                    <p className="comment-name">{userNickName}</p>}
            
            <div className="comment-rating">
                <Score font="material-icons md-18" data={score}/>
            </div>
            
            </div>
            <p className="comment-date">{register_date}</p>
            <p className="comment-content">{content}</p>
            
            { nickname === userNickName && 
                    <div className="comment-btns" >
                        <SettingsIcon onClick={() => {props.updateComment()}}></SettingsIcon>
                        <Link to="/comment" className=""><SettingsIcon /></Link>
                        <DeleteIcon onClick={() => {props.deleteComment(comment)}}/>
                    </div>}
            <hr className="thin-line"></hr>
        </div>
    );
}

export default Comment;
