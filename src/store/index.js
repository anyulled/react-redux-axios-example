import {createStore, applyMiddleware, combineReducers, compose} from "redux";

import rootReducer from "../reducers";
import thunkMiddleware from "redux-thunk";

import {routerReducer} from "react-router-redux";


/** @namespace window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = combineReducers({
    example: rootReducer,
    routing: routerReducer
});

export default createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));