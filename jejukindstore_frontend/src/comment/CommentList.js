import React, { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

import {getAPI} from '../common/API';
import Comment from './Comment';

const CommentList = (props) => {
    const store_id = props.store_id;
    const [ comments, setComments ] = useState([]);

    useEffect(async function(){
        if(store_id === "undefined"){
            const decoded = jwtDecode(sessionStorage.getItem('Authorization'));
            setComments(await getAPI("/api/v1/user/"+decoded.nickname+"/comment"));
        }
        else{
            setComments(await getAPI("/api/v1/store/"+store_id+"/comment"));

            console.log(await getAPI("/api/v1/store/"+store_id+"/comment"));
        }
    }
    ,[props]);

    // delete comment
    const deleteComment = (c) =>{
        const newComments = comments.filter((element) => element !== c);
        // deleteAPI
        // BE에서 다시 commentList GET 해올지 / 이 배열을 수정할지 고민
        setComments(newComments);
    }

    const updateComment = (pk) => {
        const newComments = comments.filter((info, index) => index !== pk);
        // setComments(newComments);
    }

    const commentList = comments.map(
        (info, index) => 
        <div key={index}>
            <Comment comment={info} deleteComment={deleteComment} updateComment={updateComment}/>
        </div>
        );

    return(
        <div>
            {commentList}
        </div>
    );
}

CommentList.defaultProps = {
    data : [
        {
            content: "",
            id: 0,
            register_date: "",
            remove_date: "",
            score: 0,
            storeId: "",
            update_date: "",
            userNickName : ""
        }
    ]
};

export default CommentList;
