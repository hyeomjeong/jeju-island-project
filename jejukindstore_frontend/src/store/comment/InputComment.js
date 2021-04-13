import React, { useState } from 'react';

import Star from '../Star';

const InputComment = (props) => {

    const [ comment, setComment ] = useState({
        name: "",
        date: "",
        rating: 0,
        content: ""
    });

    const { name, date, rating, content } = comment;

    const onChange = (e) => {
        const { value, name } = e.target;
        setComment({
            ...comment,
            [name]: value
        });
    };

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
            inputComment();
        }
    }

    const inputComment = () =>{
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
        props.inputComment(comment);
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
        
        // console.log(hoverRating, rating);
    }
    
    return (
        <div className="insert-comment">
            <div className="comment-input-head">
                <input name="name" className="nickNmae-input" placeholder="닉네임" onChange={onChange} value={name}></input>
                <div className="star-rating">
                    <Star data={rating} onSaveRating={onSaveRating} />
                </div>
            </div>
            
            <textarea name="content" className="comment-textarea" placeholder="심각한 비하는 신고의 대상이 될 수 있습니다." onChange={onChange} onKeyPress={handleKeyPress} value={content} ></textarea>
            <button className="insert-comment-btn" onClick={inputComment} onKeyPress={handleKeyPress}>등록</button>
        </div>
    );

}

export default InputComment;