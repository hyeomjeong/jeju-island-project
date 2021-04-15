import React, { useEffect, useState } from 'react';
import './common.css';

import UpIcon from '@material-ui/icons/ExpandLess';
import DownIcon from '@material-ui/icons/ExpandMore';

const Header = (props) => {

    const [isChecked, setCheck] = useState(false);
    const [sessionID, setSessionID] = useState("");
    const [inputs, setInputs] = useState([]); 

    const onChange = (e) => {
        if(e.target.checked){
            setInputs(inputs.concat(e.target.name));
        }
        else
            removeInput(e.target.name);
    };

    const removeInput = (name) => {
        const tempInputs = inputs.slice();
        const idx = tempInputs.findIndex(function(item) {
            return item === name
        });
        if(idx > -1)
            tempInputs.splice(idx, 1);
        setInputs(tempInputs);
    }

    const removeAll = () => {
        setInputs([]);
    }

    // submit INPUTS to BackEND
    const API = () => {
        console.log("submit tags");
    }

    const btnList = inputs.map((info, index) => 
        <button className="tag-btn" key={index} onClick={() => {removeInput(info)}} name={info}>#{info}</button>
    );
   
    return(
        <div>
            <button className="login-out-btn">{sessionID === "" ? "LOGIN" : "LOGOUT"}</button>
            <div className="common-header">
                <div className="search-box">
                    <div className="tag-box"> 
                        {btnList}
                    </div>
                    <button className="detail-search-btn" onClick={() => {setCheck(!isChecked)}}>{isChecked? <UpIcon /> : <DownIcon />}</button>
                </div>
                { isChecked && <div>
                    <CheckBox inputs={inputs} onChange={onChange} category={props.category} location={props.location}/>
                    <div className="search-btns">
                        <button className="margin-btn" onClick={removeAll}>REMOVE ALL</button>
                        <button className="margin-btn" onClick={API}>SEARCH</button>
                    </div>  
                </div>}
            </div>
        </div>
    );
};

const CheckBox =(props) => {
    const [inputs, setInputs] = useState(props.inputs);

    useEffect(() => {
        setInputs(props.inputs);
    }, [props.inputs]);

    const category = props.category;
    const location = props.location;

    const categoryBoxies = category.map(
        (info, index) => 
        <div key={index}>
            <input checked={inputs.includes(info)} id={info} type="checkbox" name={info} onChange={props.onChange}></input> {info}
        </div>
    );
    const locationBoxies = location.map(
        (info, index) => 
        <div key={index}>
            <input checked={inputs.includes(info)} id={info} type="checkbox" name={info} onChange={props.onChange}></input> {info}
        </div>
    );

    return(
        <div className="search-info-detail">
            <p className="category-p">🍜업종별✨</p>
            <div className="checkBoxies">
                {categoryBoxies}
            </div>
            <hr className="middle-line"></hr>
            <p className="category-p">🌴지역별🤸‍♀️</p>
            <div className="checkBoxies">
                {locationBoxies}
            </div>
            
        </div>
    );

};

Header.defaultProps = {
    category: ["한식", "중식", "양식", "일식", "숙박", "이미용", "4점이상"],
    location: ["옥계동", "거의동", "양호동", "한남동", "양포동", "산동", "인동", "사수동", "금은동"]
};

export default Header;