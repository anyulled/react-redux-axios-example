import {createStore, applyMiddleware, combineReducers} from "redux";

import rootReducer from "../reducers";
import thunkMiddleware from "redux-thunk";

import {routerReducer} from "react-router-redux";

const reducers = combineReducers({
    rootReducer,
    routing: routerReducer
});

export default createStore(reducers, applyMiddleware(thunkMiddleware));