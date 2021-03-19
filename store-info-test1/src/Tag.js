import React, { Component } from 'react';

export default class Tag extends Component{

    render(){
        return(
            <div>
                <button className="tag-btn">{this.props.value}</button>
            </div>
        );
    }
}