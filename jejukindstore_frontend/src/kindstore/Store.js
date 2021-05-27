import React, { useState, useEffect } from 'react';
import { getAPI } from '../common/API';

import '../common/common.css';
import './Store.css';

import StoreInfo from './StoreInfo';
import MenuList from './menu/MenuList';
import CommentList from '../comment/CommentList';

// function 
const Store = (props) =>{
    const [ store_id, setID ] = useState(props.location.state.id);
    
    const [ store_info, setStoreInfo ] = useState({
        name: "",
        location: "",
        telephone: "",
        address: "",
        category: "",
    });

    useEffect(() => {
        const getStore = async() => {
            setStoreInfo(await getAPI("/api/v1/store/" + store_id));
        }
        getStore();
    }, [store_id]);

    return(
        <div className="store-info">
            <StoreInfo data={store_info}/>
            <hr className="middle-line"></hr>
            <div className="menu-info-list">
                <MenuList store_id={store_id} />
            </div>
            <hr className="middle-line"></hr>
            <div className="comment-list">
                <CommentList store_id={store_id} />
            </div>           
        </div>
    );

}
/*
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
*/
export default Store;
