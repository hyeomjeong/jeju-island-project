import React, {useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import Main from '../map/Map';

import Login from '../member/Login';
import SignUp from '../member/SignUp';

import Store from '../store/Store';

export default () => {
    const [session, setSession] = useState("");
    return(
        <Router>
            <Header/>
            
            <Route exact path='/' component={Main}/>

            <Route path='/store/id' component={Store}/>

            <Route path='/member/login' component={Login}/>
            <Route path='/member/sign-up' component={SignUp}/>
            
        </Router>
    );
}