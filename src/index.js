import "babel-core/polyfill";

import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Router, Route, browserHistory, hashHistory} from "react-router";
//import {syncHistoryWithStore} from "react-router-redux";

//import App from "./containers/AppContainer";
import Countries from "./containers/CountriesContainer";
//import Error from "./containers/ErrorContainer";
import App from "./components/App";
//import Countries from "./components/Countries";
import ExpectedError from "./components/ExpectedError";
import Home from "./components/Home";
import store from "./store";

//const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route component={App}>
                <Route path='/' component={Home}/>
                <Route path='/countries' component={Countries}/>
                <Route path='/othercountry' component={ExpectedError}/>
                <Route path='/error' component={Error}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById("root")
);
