import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';

import { useCookies } from 'react-cookie';

import Header from './Header';
import Main from '../map/Map';

import SignIn from '../member/SignIn';
import SignUp from '../member/SignUp';
import FindMember from '../member/FindMember';
import MyPage from '../member/MyPage';
import Modify from '../member/Modify';

import Store from '../store/Store';

export default () => {
    // const [cookies, setCookie, removeCookie] = useCookies(['rememberEmail']);
    const [status, setStatus] = useState(false);
    
    const checkStatus = (s) => {
        console.log("check")
        setStatus(s === null ? false : true);
    }
    
    return(
        <BrowserRouter>
            
            <Header data={status} check={checkStatus}/>
            <Switch>
                <Route exact path='/' component={Main}/>

                <Route path='/store/id' component={Store}/>

                <Route path='/member/sign-in' render={() => <SignIn check={checkStatus} />}/>
                <Route path='/member/sign-up' component={SignUp}/>
                <Route path='/member/find' component={FindMember}/>
                <Route path='/member/my-page' component={MyPage}/>
                <Route path='/member/modify' component={Modify}/>

            </Switch>
            
            
        </BrowserRouter>
    );

}