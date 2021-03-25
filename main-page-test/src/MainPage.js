import React, { useState, useRef } from 'react';

import Map from './Map';
import './MainPage.css';
import './DefaultCSS.css';

import SearchIcon from '@material-ui/icons/Search';


const MainPage = () => {

    const [ input,setInput ] = useState("");
    const [ place, setPlace ] = useState("");

    const search = () => {
        setPlace(input);
        setInput("");
    };
    
    const handleChange = (e) => setInput(e.target.value);

    return(
        <div className="main-page">
            <div className="search-box">
                <input placeholder="검색할 장소를 입력해주세요." onChange={handleChange}></input>
                <button onClick={search}><SearchIcon></SearchIcon></button>
            </div>            
            <p className="explanation-p">💖 태그 검색시 상단에 "#"을 붙여주세요 🙏</p>
            <Map searchPlace={place}/>
        </div>
    );
}

export default MainPage;