import React, { useEffect, useState } from 'react';
import './common.css';

import UpIcon from '@material-ui/icons/ExpandLess';
import DownIcon from '@material-ui/icons/ExpandMore';

const Header = (props) => {

    const [isChecked, setCheck] = useState(false);
    const [sessionID, setSessionID] = useState("");
    const [inputs, setInputs] = useState([]);

    const onChange = (e) => {
        if(e.target.checked)
            setInputs(inputs.concat(e.target.name));
        else
            removeInput(e.target.name);
    };

    const removeInput = (name) => {
        const temp = inputs.slice();
        const idx = temp.findIndex(function(item) {
            return item === name
        });
        if(idx > -1)
            temp.splice(idx, 1);
        setInputs(temp);
        console.log("");
    }

    const btnList = inputs.map((info, index) => 
        <button className="tag-btn" key={index} onClick={() => {removeInput(info)}} name={info}>#{info}</button>
    );

    return(
        <div className="common-header">
            <div>
                <button className="login-out-btn">{sessionID === "" ? "LOGIN" : "LOGOUT"}</button>
            </div>
            <div className="search-box">
                <div className="tag-box"> 
                    {btnList}
                </div>
                <button className="detail-search-btn" onClick={() => {setCheck(!isChecked)}}>{isChecked? <UpIcon /> : <DownIcon />}</button>
            </div>
                {isChecked ? <CheckBox onChange={onChange} category={props.category} location={props.location}/> : ''}
        </div>
    );
};

const CheckBox = (props)=> {
    const category = props.category;
    const location = props.location;

    const categoryBoxes = category.map(
        (info, index) => 
        <div key={index}>
            <input id={info} type="checkbox" name={info} onChange={props.onChange}></input> {info}
        </div>
    );
    const locationBoxes = location.map(
        (info, index) => 
        <div key={index}>
            <input id={info} type="checkbox" name={info} onChange={props.onChange}></input> {info}
        </div>
    );


    return(
        <div className="search-info-detail">
            <p className="category-p">🍜업종별✨</p>
            <div className="checkBoxies">
                {categoryBoxes}
            </div>
            <hr className="middle-line"></hr>
            <p className="category-p">🌴지역별🤸‍♀️</p>
            <div className="checkBoxies">
                {locationBoxes}
            </div>
        </div>
    );

};

Header.defaultProps = {
    category: ["한식", "중식", "양식", "일식", "숙박", "이미용", "4점이상"],
    location: ["옥계동", "거의동", "양호동", "한남동", "양포동", "산동", "인동", "사수동", "금은동"]
};

export default Header;