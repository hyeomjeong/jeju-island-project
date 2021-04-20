import React, {useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import Main from '../map/Map';

import Login from '../member/Login';
import SignIn from '../member/SignIn';

import Store from '../store/Store';

export default () => {
    const [session, setSession] = useState("");
    return(
        <Router>
            <Header session={session} />
            
            <Route exact path='/' component={Main}/>

            <Route path='/Store' component={Store}/>

            <Route path='/Login' component={Login} session={session} />
            <Route path='/Sign-in' component={SignIn}/>
        </Router>
    );
}