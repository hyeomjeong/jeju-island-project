import React, { useState, useRef } from 'react';

import Map from './Map';
import TagList from './TagList';
import './MainPage.css';
import './DefaultCSS.css';

import SearchIcon from '@material-ui/icons/Search';


const MainPage = () => {
    const [ input,setInput ] = useState("");
    const [ place, setPlace ] = useState("");
    const [ tag, setTag ] = useState("");
    const [ isTag, setType ] = useState(false);

    const inputEl = useRef(null);

    const search = () => {
        if (input === "")
            alert("검색어를 입력해주십시오!!");

        else{
            if(input[0] === "#"){
                setType(true);
                setTag(input.slice(1));
            }
            else {
    
                setType(false);
                setPlace(input);
            }
    
            setInput("");
        }
        
        inputEl.current.focus();
    };
    
    const keyPress = (e) => {
        if(e.key === "Enter")
            search();
    }

    const handleChange = (e) => setInput(e.target.value);

    return(
        <div className="main-page">
            <div className="search-box">
                <input value={input} placeholder="검색할 장소를 입력해주세요." onChange={handleChange} ref={inputEl} onKeyPress={keyPress}></input>
                <button onClick={search}><SearchIcon></SearchIcon></button>
            </div>            
            <p className="explanation-p">💖 태그 검색시 상단에 "#"을 붙여주세요 🙏</p>
            <div>

            </div>
            {isTag? <TagList tag={tag}/> : <Map searchPlace={place}/>}
        </div>
    );
}

MainPage.defaultProps = {
    tags: ["한식","중식","일식", "양식","미용"]
}

export default MainPage;