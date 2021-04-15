import { render } from "@testing-library/react";
import React, { useState } from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"

import Header from './common/Header';
import Store from './store/Store';

const App = (props) => {
    return (
        <BrowserRouter>
            <Header />
            <Store />
            <Route exact path="/store" component={Store} />
        </BrowserRouter>
    );
}

export default App;