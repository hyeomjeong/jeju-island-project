import React, { Component } from 'react';
import Menu from './Menu';

export default class MenuList extends Component{
    
    static defaultProps = {
        data: []
    }

    render(){
        const { data } = this.props;
        const list = data.map(
            (info, index) => <Menu key={index} name={info.name} price={info.price} />
        );
        return(
            <div>
                {list}
            </div>
        );
    }
}