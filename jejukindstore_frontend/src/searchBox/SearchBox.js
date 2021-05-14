
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import CheckBox from './CheckBox';
import './SearchBox.css';

import UpIcon from '@material-ui/icons/ExpandLess';
import DownIcon from '@material-ui/icons/ExpandMore';


const SearchBox = (props) => {

    const [isChecked, setCheck] = useState(false);
    const [inputs, setInputs] = useState([]); 
    console.log(inputs);
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

    
    const btnList = inputs.map((info, index) => 
        <button className="tag-btn" key={index} onClick={() => {removeInput(info)}} name={info}>#{info}</button>
    );
   
    return(
        <div className="search">
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
                    <button><Link to="/store/id" className="links">SEARCH</Link></button>
                </div>  
            </div>}
        </div>
    );
}


SearchBox.defaultProps = {
    category: ["한식", "중식", "양식", "일식", "숙박", "이미용", "4점이상"],
    location: ["옥계동", "거의동", "양호동", "한남동", "양포동", "산동", "인동", "사수동", "금은동"]
};

export default SearchBox;

