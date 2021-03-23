import React, { Component } from 'react';

import './SearchBox.css';

import SearchIcon from '@material-ui/icons/Search';
export default class SearchBox extends Component{
    const [inputText, setInputText] = useState("");
    handleChange = (e) => {
        
    };

    render(){
        return(
            <div className="search-box">
                <input placeholder="검색할 장소를 입력해주세요." onChange={}></input>
                <button><SearchIcon></SearchIcon></button>
            </div>
        );
    }
}