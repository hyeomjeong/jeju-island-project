import React, { Component } from 'react';

export default class Menu extends Component{
    static defaultProps = {
        info: {
            name: "메뉴명",
            price: 0
        }
    };

    render(){
        return(
            <div className="menu-info">
                <p className="menu-name">{this.props.name}</p>
                <p className="menu-price">{this.props.price}원</p>
            </div>
        );
    }
}