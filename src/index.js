import "babel-core/polyfill";

import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Router, Route, browserHistory} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";

import App from "./containers/AppContainer";
import Countries from "./containers/CountriesContainer";
import Error from "./containers/ErrorContainer";
import ExpectedError from "./components/ExpectedError";
import Home from "./components/Home";
import store from "./store";

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={App}>
                <Route path='/' component={Home}/>
                <Route path='/countries' component={Countries}/>
                <Route path='/othercountry' component={Error}/>
                <Route path='/error' component={ExpectedError}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById("root")
);
