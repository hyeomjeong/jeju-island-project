import React from 'react';
import {Link} from 'react-router-dom';
import './comment.css';
import Score from '../store/Score';

import SettingsIcon from '@material-ui/icons/Settings';
import DeleteIcon from '@material-ui/icons/Delete';

const Comment = (props) => {
    const comment= props.comment;
    const { storeName, name, date, rating, content } = comment;
    const nickname = props.member;
    return(
        <div className="comment">
            
            <div className="flex-row">
            {name === undefined ? 
                    <Link to="/" className="store-link">{storeName}</Link>
                    : 
                    <p className="comment-name">{name}</p>}
            
            <div className="comment-rating">
                <Score font="material-icons md-18" data={rating}/>
            </div>
            
            </div>
            <p className="comment-date">{date}</p>
            <p className="comment-content">{content}</p>
            
            { nickname === name && 
                    <div className="comment-btns" >
                        <SettingsIcon onClick={() => {}}/>
                        <DeleteIcon onClick={() => {props.deleteComment(comment)}}/>
                    </div>}
            <hr className="thin-line"></hr>
        </div>
    );
}

export default Comment;
