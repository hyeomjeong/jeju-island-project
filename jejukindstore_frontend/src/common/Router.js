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

import Store from '../store/Store';

import InputComment from '../comment/InputComment';
import { PinDropSharp } from '@material-ui/icons';

export default () => {
    const [logStatus, setLog] = useState(false);

    return(
        <BrowserRouter>
            
            <Header status={logStatus} setLog={() => setLog(false)}/>
            <Switch>
                <Route exact path='/' component={Main}/>

                <Route path='/store/id' component={Store}/>

                
                <Route path='/comment' component={InputComment}/>

                <Route path='/member/sign-in' render={() => <SignIn setLog={() => setLog(true)}/>}/>
                <Route path='/member/sign-up' component={SignUp}/>
                <Route path='/member/find' component={FindMember}/>
                <Route path='/member/my-page' component={MyPage}/>
                <Route path='/member/modify' component={Modify}/>

            </Switch>
            
            
        </BrowserRouter>
    );

}