import React, { useState } from 'react';

import Comment from './Comment';

const CommentList = (props) => {
    const { data } = props;
    const list = data.map(
        (info, index) => <Comment key={index} name={info.name} date={info.date} content={info.content}/>
    );

    return(
        <div>
            {list}
        </div>
    );
}

CommentList.defaultProps = {
    data : []
};

export default CommentList;
