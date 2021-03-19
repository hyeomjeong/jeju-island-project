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
        return(
            <div className="comment-info">
                <div className="comment-detail-info">
                    <p className="comment-name">{this.props.name}</p>
                    <p className="comment-date">{this.props.date}</p>
                </div>
                <p className="comment-content">{this.props.content}</p>
                <hr className="thin-line"></hr>
            </div>
        );
    };
}