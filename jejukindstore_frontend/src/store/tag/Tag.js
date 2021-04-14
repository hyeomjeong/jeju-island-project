import React from 'react';
import './tag.css';
const Tag = (props) =>{
    const { data } = props;

    
    // click 시 해당 태그 목록 페이지로 이동
    const clickBTN = () => {
        
    };

    return(
        <button className="tag-btn" onClick={clickBTN}>#{data}</button>
    );
};

Tag.defaultProps = {
    tag: ""
};

export default Tag;