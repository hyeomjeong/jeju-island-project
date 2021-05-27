
import React, {useState, useEffect, useMemo} from 'react';
import {getAPI} from '../common/API';

const CheckBox = (props) => {
    // console.log(props);
    const [inputs, setInputs] = useState(props.inputs);
    
    const category = props.category;
    const local = props.local;

    useEffect(() => {
        setInputs(props.inputs);
    }, [props.inputs]);

    // console.log(inputs.findIndex(i => i.value === "일식"));
    const categoryBoxies = category.map(
        (info, index) => 
        <div key={index}>
            <input checked={inputs.findIndex(idx => idx.value === info) !== -1} id={info} value={info} type="checkbox" name="category" onChange={props.onChange}></input> {info}
        </div>
    );
    const locationBoxies = local.map(
        (info, index) => 
        <div key={index}>
            <input checked={inputs.findIndex(idx => idx.value === info) !== -1} id={info} value={info} type="checkbox" name="local" onChange={props.onChange}></input> {info}
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

export default CheckBox;
