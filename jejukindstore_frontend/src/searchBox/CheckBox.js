
import React, {useState, useEffect, useMemo} from 'react';
import {getAPI} from '../common/API';

const CheckBox = (props) => {
    console.log(props);
    const [inputs, setInputs] = useState(props.inputs);
    
    useEffect(() => {
        setInputs(props.inputs);
    }, [props.inputs]);

    const location = props.location;
    const category = props.category;

    const categoryBoxies = useMemo(() => category.map(
        (info, index) => 
        <div key={index}>
            <input checked={inputs.includes(info)} id={info} type="checkbox" name={info} onChange={props.onChange}></input> {info}
        </div>
    ), [category]);
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

export default CheckBox;
