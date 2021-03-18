import React, { Component } from 'react';

export default class Comment extends Component{
    static defaultProps = {
        info: {
            name: "닉네임",
            date: "2015-03-10",
            content: "댓글내용"
        }
    };

    render(){
        const {
            name, date, content
        } = this.props.info;

        return(
            <div className="comment-info">
                <p className="comment-name">{name}</p>
                <p className="comment-date">{date}</p>
                <p className="comment-content">{content}</p>
            </div>
        );
    };
}