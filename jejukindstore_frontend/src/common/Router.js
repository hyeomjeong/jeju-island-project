import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import Cookies from 'js-cookie';

import Header from './Header';
import Main from '../map/Map';

import SignIn from '../member/SignIn';
import SignUp from '../member/SignUp';
import FindMember from '../member/FindMember';
import MyPage from '../member/MyPage';
import Modify from '../member/Modify';

import Store from '../kindstore/Store';

import InputComment from '../comment/InputComment';

export default () => {
    // const [logStatus, setLog] = useState(false);

    return(
        <BrowserRouter>
            
            <Header />
            <Switch>
                <Route exact path='/' component={Main}/>

                <Route path='/store/id' component={Store}/>

                
                <Route path='/comment' component={InputComment}/>

                <Route path='/member/sign-in' component={SignIn}/>
                <Route path='/member/sign-up' component={SignUp}/>
                <Route path='/member/find' component={FindMember}/>
                <Route path='/member/my-page' component={MyPage}/>
                <Route path='/member/modify' component={Modify}/>

            </Switch>
            
            
        </BrowserRouter>
    );

}