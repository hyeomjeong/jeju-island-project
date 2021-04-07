import React, { useState, useMemo } from 'react';

import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';

const InputComment = (props) => {

    const [ comment, setComment ] = useState({
        name: "",
        date: "",
        score: 0,
        content: ""
    });

    const { name, date, score, content } = comment;

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
            score: 0,
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
        if(comment.score === 0){
            alert("별점을 입력해주세요!! (0.5 ~ 5)");
        }
        var today = new Date();
        setComment(comment.date = (today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate()));
        props.inputComment(comment);
        onReset();
    }

    const [hoverRating, setHoverRating] = useState(0);

    const onMouseEnter = (e) =>{
        console.log(score)
        /* 
        var t = parseInt(e.target.id)
        console.log(e)
        if (e.width * 0.33 <= e.clientx && e.clientx <= e.width * 0.66){
            t += 0.5;
        }
        else if (e.x > e.width * 0.66){
            t += 1;
        }
        */
        setHoverRating(parseInt(e.target.id));
    }

    const onMouseLeave = () => setHoverRating(0);
    const onSaveRating = () => setComment({...comment, score: hoverRating});

    return (
        <div className="insert-comment">
            <div className="scores">
                <StarBorderIcon className={score === 0 ? (hoverRating >= 1 ? "star" : "border") : (score >= 1 ? "star" : "border")} id="1" onMouseMove={onMouseEnter} onMouseLeave={onMouseLeave} onMouseDown={onSaveRating}/>
                <StarBorderIcon className={score === 0 ? (hoverRating >= 2 ? "star" : "border") : (score >= 2 ? "star" : "border")} id="2" onMouseMove={onMouseEnter} onMouseLeave={onMouseLeave} onMouseDown={onSaveRating}/>
                <StarBorderIcon className={score === 0 ? (hoverRating >= 3 ? "star" : "border") : (score >= 3 ? "star" : "border")} id="3" onMouseMove={onMouseEnter} onMouseLeave={onMouseLeave} onMouseDown={onSaveRating}/>
                <StarBorderIcon className={score === 0 ? (hoverRating >= 4 ? "star" : "border") : (score >= 4 ? "star" : "border")} id="4" onMouseMove={onMouseEnter} onMouseLeave={onMouseLeave} onMouseDown={onSaveRating}/>
                <StarBorderIcon className={score === 0 ? (hoverRating >= 5 ? "star" : "border") : (score >= 5 ? "star" : "border")} id="5" onMouseMove={onMouseEnter} onMouseLeave={onMouseLeave} onMouseDown={onSaveRating}/>
                {/* 
                <Stars
                    onMouseDown = {onSaveRating}
                    onMouseEnter = {onMouseEnter}
                    onMouseLeave = {onMouseLeave}
                />
                */}
            </div>
            <input name="name" className="nickNmae-input" placeholder="닉네임" onChange={onChange} value={name}></input>
            <textarea name="content" className="comment-textarea" placeholder="심각한 비하는 신고의 대상이 될 수 있습니다." onChange={onChange} onKeyPress={handleKeyPress} value={content} ></textarea>
            <button className="insert-comment-btn" onClick={inputComment} onKeyPress={handleKeyPress}>등록</button>
        </div>
    );

}

export default InputComment;