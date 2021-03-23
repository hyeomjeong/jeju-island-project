import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';

export default class SearchBox extends Component{
    render(){
        return(
            <div>
                <input placeholder="moo-ya-ho"></input>
                <button><SearchIcon></SearchIcon></button>
            </div>
        );
    }
}