
import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import {getAPI} from '../common/API';
import CheckBox from './CheckBox';
import './SearchBox.css';

import UpIcon from '@material-ui/icons/ExpandLess';
import DownIcon from '@material-ui/icons/ExpandMore';


const SearchBox = (props) => {
    const history = useHistory();
    const [ isChecked, setCheck ] = useState(false);
    const [ inputs, setInputs ] = useState([]); 

    // console.log(inputs);
    const onChange = (e) => {
        console.log(e.target);
        if(e.target.checked){
            setInputs(inputs.concat({
                name: e.target.name,
                value: e.target.value
            }));
        }
        else
            removeInput(e.target.value);
    };

    const removeInput = (value) => {
        const tempInputs = inputs.slice();
        console.log(tempInputs);
        const idx = tempInputs.findIndex(function(item) {
            return item.value === value
        });
        if(idx > -1)
            tempInputs.splice(idx, 1);
        setInputs(tempInputs);
    }

    const removeAll = () => {
        setInputs([]);
    }
 
    const btnList = inputs.map((info, index) => 
        <button className="tag-btn" key={index} onClick={() => {removeInput(info.value)}} name={info.value}>#{info.value}</button>
    );
   
    const search = async() => {
        const params = {};
        inputs.map((info) => 
            params[info.name] === undefined ? params[info.name] = [info.value] : params[info.name].push(info.value)
        );
        
        // console.log(params);
        history.push({
            pathname: "/store_list",
            state: {params: params},
        })
        // console.log(stores);
        
    }

    return(
        <div className="search">
            <div className="search-box">
                <div className="tag-box"> 
                    {btnList}
                </div>
                <button className="detail-search-btn" onClick={() => {setCheck(!isChecked)}}>{isChecked? <UpIcon /> : <DownIcon />}</button>
            </div>
            { isChecked && <div>
                <CheckBox inputs={inputs} onChange={onChange} category={props.category} local={props.local}/>
                <div className="search-btns">
                    <button className="margin-btn" onClick={removeAll}>REMOVE ALL</button>
                    <button onClick={search}>SEARCH</button>
                </div>  
            </div>}
        </div>
    );
}

export default SearchBox;

