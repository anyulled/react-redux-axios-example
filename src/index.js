import "babel-core/polyfill";

import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Route} from "react-router";
import {ReduxRouter} from "redux-react-router";
import {syncHistoryWithStore} from "react-router-redux";

import App from "./containers/AppContainer";
import Countries from "./containers/CountriesContainer";
import Error from "./containers/ErrorContainer";
import ExpectedError from "./components/ExpectedError";
import Home from "./components/Home";
import {fetchData} from "./actions/actions";
import store from "./store";

function loadData() {
    store.dispatch(fetchData("https://restcountries.eu/rest/v1/all"));
}

//we expect this to fail and get forwarded to the error page
function loadBadData(){
    store.dispatch(fetchData("https://restcountries.eu/rest/v1/callingcode/123123"));
}

const history = syncHistoryWithStore();

ReactDOM.render(
	<Provider store={store}>
		<ReduxRouter>
			<Route history={history}>
				<Route component={App}>
					<Route path='/' component={Home} />
					<Route path='/countries' component={Countries} onEnter={loadData} />
					<Route path='/othercountry' component={ExpectedError} onEnter={loadBadData} />
					<Route path='/error' component={Error} />
				</Route>
			</Route>
		</ReduxRouter>
	</Provider>,
    document.getElementById("root")
);
