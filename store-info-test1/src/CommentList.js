import React, { Component } from 'react';

import Comment from './Comment';

export default class CommentList extends Component{
    static defaultProps = {
        data: []
    };

    render(){
        const { data } = this.props;
        const list = data.map(
            (info, index) => <Comment key={index} name={info.name} date={info.date} contnent={info.contnent}/>
        );
        return(
            {list}
        );
    }
}