import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import ClearIcon from '@material-ui/icons/Clear';
import Comment from './Comment';
import InputComment from './InputComment';

const CommentList = (props) => {
    const [ comments, setComments ] = useState(props.data);
    //console.log(comments);

    const deleteComment = (pk) =>{
        const newComment = comments.filter((info, index) => index !== pk);
        setComments(newComment);
        props.setComment(newComment);
    }

    const inputComment = (newComment) => {
        const newComments = comments.concat(newComment);
        setComments(newComments)
        props.setComment(newComments);
    }

    const commentList = comments.map(
        (info, index) => 
        <div key={index}>
            {
                info.store_id ? 
                <Link to="/" className="links">{info.store_id}</Link>
                :
                ''
            }
            <button className="delete-btn" onClick={() => deleteComment(index)}><ClearIcon></ClearIcon> </button>   
            <Comment name={info.name} date={info.date} rating={info.rating} content={info.content}/>    
        </div>
        );

    return(
        <div>
            {commentList}
            <InputComment inputComment={inputComment}/>
        </div>
    );
}

CommentList.defaultProps = {
    data : []
};

export default CommentList;
