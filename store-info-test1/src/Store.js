import React, { Component } from 'react';
import './Store.css';

import MenuList from './MenuList';
import CommentList from './CommentList';

export default class Store extends Component{
    /*
    static defaultProps = {
        name: "현구녕네",
        score: 5,
        phone: "010-6641-6673",
        address: "경상북도 구미시 거의동 387-7번지 제니스H 201호",
        tags: ["food", "korea", "cozy"],

        menus: [
            {
                name: "콩나물불고기",
                price: 15000
            },
            {
                name: "감자짜글이",
                price: 7000
            },
            {
                name: "감자전",
                price: 5000
            },
        ],

        comments: [
            {
                name: "조현팔",
                date: "2021-03-18",
                content: "아주 맛있습니다. 츄베릅."
            },
            {
                name: "죠죠킹",
                date: "2021-03-15",
                content: "사장님이 당근을 좋아하시나봐요,,,? 그래도 맛은 있습니다~~"
            },
        ]
    };
    */

    state = {
        name: "현구녕네",
        score: 5,
        phone: "010-6641-6673",
        address: "경상북도 구미시 거의동 387-7번지 제니스H 201호",
        tags: ["#food", "#korea", "#cozy"],

        menus: [
            {
                name: "콩나물불고기",
                price: 15000
            },
            {
                name: "감자짜글이",
                price: 7000
            },
            {
                name: "감자전",
                price: 5000
            },
        ],

        comments: [
            {
                name: "조현팔",
                date: "2021-03-18",
                content: "아주 맛있습니다. 츄베릅."
            },
            {
                name: "죠죠킹",
                date: "2021-03-15",
                content: "사장님이 당근을 좋아하시나봐요,,,? 그래도 맛은 있습니다~~"
            },
        ]
    };

    render(){
        const p = this.state;

        return(
            <div className="store-info">
                <div className="store-detail-info">
                    <p className="store-name">{this.state.name}</p>
                    <p className="store-phone">{this.state.phone}</p>
                    <p className="store-address">{this.state.address}</p>
                    
                    <p className="store-tags">{this.state.tags}</p>
                </div>
                <hr></hr>
                <div className="menu-info-list">
                    <MenuList data={this.state.menus} />
                </div>
                <hr></hr>
                {/*
                <div className="comment-list">
                    <CommentList data={this.state.comments} />
                </div>
                */}
                
            </div>
        );
    }
}