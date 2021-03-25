import React, { useState } from 'react';

const InputComment = (props) => {

    const [ comment, setComment ] = useState({
        name: "",
        date: "",
        content: ""
    });

    const { name, date, content } = comment;

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

        var today = new Date();
        setComment(comment.date = (today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate()));
        props.inputComment(comment);
        onReset();
    }

    return (
        <div className="insert-comment">
            <input name="name" className="nickNmae-input" placeholder="닉네임" onChange={onChange} value={name}></input>
            <textarea name="content" className="comment-textarea" placeholder="심각한 비하는 신고의 대상이 될 수 있습니다." onChange={onChange} value={content}></textarea>
            <button className="insert-comment-btn" onClick={inputComment}>등록</button>
        </div>
    );

}

export default InputComment;