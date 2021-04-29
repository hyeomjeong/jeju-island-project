import React, { useEffect, useState } from 'react';
import Comment from './Comment';

const CommentList = (props) => {
    const nickname = props.user;
    const [ comments, setComments ] = useState(props.data);

    useEffect(() => {
        setComments(props.data);
    }
    ,[props.data]);

    // delete comment
    const deleteComment = (c) =>{
        const newComments = comments.filter((element) => element !== c);
        // deleteAPI
        // BE에서 다시 commentList GET 해올지 / 이 배열을 수정할지 고민
        // setComments(newComments);
        props.setComment(newComments);
    }

    const updateComment = (pk) => {
        const newComments = comments.filter((info, index) => index !== pk);
        // setComments(newComments);
        props.setComment(newComments);
    }

    const commentList = comments.map(
        (info, index) => 
        <div key={index}>
            <Comment nickname={nickname} comment={info} deleteComment={deleteComment} updateComment={updateComment}/>
        </div>
        );

    return(
        <div>
            {commentList}
        </div>
    );
}

CommentList.defaultProps = {
    data : []
};

export default CommentList;
