import React, { useState } from 'react';
import TagList from './TagList';

const Tag = (props) =>{
    const { data } = props;

    
    // click 시 해당 태그 목록 페이지로 이동
    const clickBTN = () => {
        return(
            <TagList tag={data}/>
        );
    };

    return(
        <button className="tag-btn" onClick={clickBTN}>#{data}</button>
    );
};

Tag.defaultProps = {
    tag: ""
};

export default Tag;