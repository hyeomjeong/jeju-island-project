import React, { useState } from 'react';
import './common.css';
import TagBtns from './TagBtns';

import UpIcon from '@material-ui/icons/ExpandLess';
import DownIcon from '@material-ui/icons/ExpandMore';

const Header = (props) => {

    const [isChecked, setCheck] = useState(false);
    const [sessionID, setSessionID] = useState("");
    const [inputs, setInputs] = useState([]);

    const onChange = (e) => {
        if(e.target.checked){
            const newInputs = inputs.concat(e.target.name);
            setInputs(newInputs);
        }
        else{
            const idx = inputs.findIndex(function(item) {
                return item === e.target.name}); // findIndex = find + indexOf 
            let tempArray = inputs;
            if (idx > -1) 
                tempArray.splice(idx, 1);
            setInputs(tempArray);
        }
            //removeTag(e);
    }

    const removeTag = (name) => {
        // console.log(e.target.name);
        const idx = inputs.findIndex(function(item) {
            return item === name}); // findIndex = find + indexOf 
        let tempArray = inputs;
        console.log(tempArray);
        if (idx > -1) 
            tempArray.splice(idx, 1);
        // console.log(tempArray);
        setInputs(tempArray);
        console.log(inputs);
    }

    return(
        <div className="header">
            <div>
                <button className="login-out-btn">{sessionID === "" ? "LOGIN" : "LOGOUT"}</button>
            </div>
            <div className="search-box">
                <TagBtns data={inputs} removeTag={removeTag}/>
                <button className="detail-search-btn" onClick={() => {setCheck(!isChecked)}}>{isChecked? <UpIcon /> : <DownIcon />}</button>
            </div>
            <div>
                <input type="checkbox" name="test" onChange={onChange}></input> test
            </div>
                {isChecked ? <CheckBox onChange={onChange} category={props.category} location={props.location}/> : ''}
        </div>
    );
};

const CheckBox = (props)=> {
    // const [categories, setCategories] = useState(props.category);
    // const [locations, setLocations] = useState(props.location);
    const category = props.category;
    const location = props.location;

    const categoryBoxes = category.map(
        (info, index) => 
        <div key={index}>
            <input type="checkbox" name={info} onChange={props.onChange}></input> {info}
        </div>
    );

    return(
        <div className="">
           {categoryBoxes}
        </div>
    );

}

Header.defaultProps = {
    category: ["한식", "중식", "양식", "일식", "숙박", "이미용", "4점이상"],
    location: ["옥계동", "거의동", "양호동", "한남동", "양포동", "산동", "인동", "사수동", "금은동"]
};

export default Header;