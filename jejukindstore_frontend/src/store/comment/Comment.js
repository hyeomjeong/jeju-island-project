import React from 'react';

import './comment.css';
import Score from '../Score';

const Comment = (props) => {
    const { name, date, rating, content } = props;


    return(
        <div className="comment-info">
            <div className="comment-detail-info">
                <p className="comment-name">{name}</p>
                <p className="comment-date">{date}</p>

                <div className="comment-rating">  
                    <Score font="material-icons md-18" data={rating}/>
                </div>
            </div>
            <p className="comment-content">{content}</p>
            <hr className="thin-line"></hr>
        </div>
    );
}

export default Comment;
