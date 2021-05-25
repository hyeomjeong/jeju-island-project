
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import {getAPI} from '../common/API';
import CheckBox from './CheckBox';
import './SearchBox.css';

import UpIcon from '@material-ui/icons/ExpandLess';
import DownIcon from '@material-ui/icons/ExpandMore';


const SearchBox = (props) => {

    const [ isChecked, setCheck ] = useState(false);
    const [ inputs, setInputs ] = useState([]); 
    const [ category, setCategory ] = useState([]);
    const [ location, setLocation ] = useState([]);

    useEffect(() => {
        console.log("useEffect");
        const setArr = async() => {
            const temp_c = await getAPI("/api/v1/store/category");
            const temp_l = await getAPI("/api/v1/store/location");
            setCategory(temp_c);
            setLocation(temp_l);
        }

        setArr();
    }, []);

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

export default SearchBox;

