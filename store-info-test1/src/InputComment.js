import React, { Component, useState } from 'react';

function InputComment(props){
    const [comment, setComment] = useState({
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

    const inputComment = () => {
        let today = new Date();
        setComment({
            date: (today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate())
        })
        this.setState({
            comments: this.state.comments.concat(comment)
        });
        props.comments.concat()
        onReset();
    };

    return (
        <div className="insert-comment">
            <input className="nickNmae-input" placeholder="닉네임" onChange={onChange} value={name}></input>
            <textarea className="comment-textarea" placeholder="심각한 비하는 신고의 대상이 될 수 있습니다." onChange={onChange} value={content}></textarea>
            <button className="insert-comment-btn" onClick={inputComment}>등록</button>
        </div>
    );
}