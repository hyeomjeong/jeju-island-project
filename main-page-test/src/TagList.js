import React, {useState} from 'react';

const TagList = (props) => {
    const tag = props.tag;

    return(
        <div className="tag=list">
            <p>DB에 태그를 보내면 해당 태그를 가진 가게 정보를 받음</p>
            <p>해당 정보 리스트화 하여 출력</p>
        </div>
    );
}

export default TagList;