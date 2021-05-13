import React, { useState } from 'react';
import {postAPI} from '../common/API';
import Star from '../kindstore/Star';
import './InputComment.css';

const InputComment = (props) => {

    const [ comment, setComment ] = useState(props.comment);

    const { name, date, rating, content } = comment;

    const onChange = (e) => setComment({...comment, [e.target.name] : e.target.value})

    const onReset = () => {
        setComment({
            name: "",
            date: "",
            rating: 0,
            content: ""
        });
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter"){
            insertComment();
        }
    }

    const insertComment = () =>{
        if(comment.content === ""){
            alert("내용을 입력하십시오!!");
            return;
        }
        if(comment.name === ""){
            alert("닉네임을 입력하십시오!!");
            return;
        }
        if(comment.rating === 0){
            alert("별점을 입력해주세요!! (0.5 ~ 5)");
            return;
        }
        var today = new Date();
        setComment(comment.date = (today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate()));
        props.insertComment(comment);
        onReset();
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
            rating: hoverRating
        });
    }
    
    return (
        <div className="flex-col">
                <div className="flex-row"> 
                    { props.comment.name === "" ? <input className="" name="name" placeholder="닉네임" onChange={onChange} value={name} /> : 
                        <p>{name}</p>
                    }
                    <Star data={rating} onSaveRating={onSaveRating} />
                </div>
            <textarea name="content" placeholder="심각한 비하는 신고의 대상이 될 수 있습니다." onChange={onChange} onKeyPress={handleKeyPress} value={content} ></textarea>
            <button className="right-btn" onClick={insertComment} onKeyPress={handleKeyPress}>등록</button>
        </div>
    );

}

InputComment.defaultProps = {
    comment: {
        name: "",
        date: "",
        rating: 0,
        content: ""
    }
}

export default InputComment;