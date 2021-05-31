import React, { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';

// import {useInput} from '../c_Hooks/useInput';
import {postAPI} from '../common/API';
import Star from '../kindstore/Star';
import './InputComment.css';

const InputComment = (props) => {
    const decoded = (jwtDecode(sessionStorage.getItem('Authorization')));
    // console.log(props.location.state.comment);
    const [ comment, setComment ] = useState({
        user_id: decoded.userId,
        store_id: props.store_id,
        content: "",
        score: 0,
    });

    const { user_id, score, content } = comment;

    const onChange = (e) => setComment({...comment, [e.target.name] : e.target.value})

    const onReset = () => {
        setComment({
            ...comment,
            score: 0,
            content: ""
        });
    };

    const connect = async() => {
        console.log(comment);
        await postAPI("/api/v1/store/" + props.store_id + "/comment", comment);
        props.insertComment();
        onReset();
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter"){
            insertComment();
        }
    }

    const insertComment = () => {
        if(comment.content === ""){
            alert("내용을 입력하십시오!!");
            return;
        }
        if(comment.score === 0){
            alert("별점을 입력해주세요!! (0.5 ~ 5)");
            return;
        }
        connect();
    }

    // const [hoverRating, setHoverRating] = useState(0);
    /*
    const onMouseEnter = (e) =>{
        /* 
        var t = parseInt(e.target.id)
        console.log(e)
        if (e.width * 0.33 <= e.clientx && e.clientx <= e.width * 0.66){
            t += 0.5;
        }
        else if (e.x > e.width * 0.66){
            t += 1;
        }
        
        setHoverRating(parseInt(e.target.id));
    }
    */
    // const onMouseLeave = () => setHoverRating(0);
    const onSaveRating = (hoverRating) => {
        setComment({
            ...comment, 
            score: hoverRating
        });
    }
    
    return (
        <div className="flex-col">
                <div className="flex-row"> 
                    <p>{decoded.nickname}</p>
                    <Star data={score} onSaveRating={onSaveRating} />
                </div>
            <textarea name="content" placeholder="심각한 비하는 신고의 대상이 될 수 있습니다." onChange={onChange} onKeyPress={handleKeyPress} value={content} ></textarea>
            <button className="right-btn" onClick={insertComment} onKeyPress={handleKeyPress}>등록</button>
        </div>
    );

}


export default InputComment;