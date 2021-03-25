import React, { useState } from 'react';

const Comment = (props) => {
    const { name, date, content } = props;

    return(
        <div className="comment-info">
            <div>
                <div className="comment-detail-info">
                    <p className="comment-name">{name}</p>
                    <p className="comment-date">{date}</p>
                </div>
            </div>
            <p className="comment-content">{content}</p>
            <hr className="thin-line"></hr>
        </div>
    );
}

export default Comment;
