import React, { useState } from 'react';
import Comment from './Comment';
import InputComment from './InputComment';

const CommentList = (props) => {
    const nickname = props.user;
    const [ comments, setComments ] = useState(props.data);
    //console.log(comments);

    const deleteComment = (c) =>{
        const newComment = comments.filter((element) => element !== c);
        setComments(newComment);
        props.setComment(newComment);
    }

    const updateComment = (pk) => {
        const newComment = comments.filter((info, index) => index !== pk);
        setComments(newComment);
        props.setComment(newComment);
    }

    /*
    const inputComment = (newComment) => {
        const newComments = comments.concat(newComment);
        setComments(newComments)
        props.setComment(newComments);
    }
    */
    const commentList = comments.map(
        (info, index) => 
        <div key={index}>
            <Comment nickname={nickname} comment={info} deleteComment={deleteComment} updateComment={updateComment}/>
        </div>
        );

    return(
        <div>
            {commentList}
            {/*
            <InputComment inputComment={inputComment}/>
            */}
        </div>
    );
}

CommentList.defaultProps = {
    data : []
};

export default CommentList;
