import React, { useState, useEffect } from 'react';

import '../common/common.css';
import './Store.css';

import MenuList from './menu/MenuList';

import CommentList from '../comment/CommentList';
import InputComment from '../comment/InputComment';

import Score from './Score';
import Tag from './tag/Tag';

// function 
const Store = (props) =>{
    const [ store_info, setStoreInfo ] = useState(props);
    const { name, rating, phone, address, tags, menus, comments } = store_info;

    const setComment = (newComments) => {
        setStoreInfo({
            ...store_info,
            comments: newComments
        });
    };

    const insertComment = (newComment) => {
        const temp = comments.concat(newComment);
        setComment(temp);
    }

    const tagList = tags.map(
        (info, index) => <Tag key={index} data={info} />
    );

    return(
        <div className="store-info">
            <div className="store-detail-info">
                <h1 className="store-name">{name}</h1>
                <Score font="material-icons md-24" data={rating}/>
                <p className="store-phone">{phone}</p>
                <p className="store-address">{address}</p>
                <div className="tags">
                    {tagList}
                </div>
            </div>
            <hr className="middle-line"></hr>
            <div className="menu-info-list">
                <MenuList data={menus} />
            </div>
            <hr className="middle-line"></hr>
            <div className="comment-list">
                <CommentList data={comments} setComment={setComment}/>
                <InputComment insertComment={insertComment}/>
            </div>           
        </div>
    );

}

Store.defaultProps = {
    name: "현구녕네",
    rating: 4.5,
    phone: "010-6641-6673",
    address: "경상북도 구미시 거의동 387-7번지 제니스H 201호",
    tags: ["식당", "한식",  "거의동"],

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
            rating: 5,
            content: "맛.이. 좃슴니다.",
        },
        {
            name: "죠죠킹",
            date: "2021-03-15",
            rating: 4.5,
            content: "사장님이 당근을 좋아하시나봐요,,,? 그래도 맛은 있습니다~~",
        },
    ],
};

export default Store;

/*

class 형식

export default class Store extends Component{

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
                content: "맛.이. 좃슴니다.",
            },
            {
                name: "죠죠킹",
                date: "2021-03-15",
                content: "사장님이 당근을 좋아하시나봐요,,,? 그래도 맛은 있습니다~~",
            },
        ],
    };

    inputComment = (newComment) => {
        this.setState(
            {
                comments: this.state.comments.concat(newComment)
            }
        );
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
                <hr className="middle-line"></hr>
                <div className="menu-info-list">
                    <MenuList data={this.state.menus} />
                </div>
                <hr className="middle-line"></hr>
                <div className="comment-info-list">
                    <CommentList data={this.state.comments} />
                </div>
                <div className="insert-comment">
                    <InputComment inputComment={this.inputComment}/>
                </div>
            </div>
            
        );
    }
}

*/