import React, { Component } from 'react';
import SearchBox from "./SearchBox"
export default class MainPage extends Component{
    render(){
        return(
            <div className="Main-Page">
                <SearchBox />
            </div>
        );
    }
}