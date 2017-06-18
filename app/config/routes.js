import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';

import Main from '../components/Main';
import Search from "../components/Search";
import Account from "../components/Account";

const routes = (
	<Router history={browserHistory}>
		<Route path='/' component={Main}>
		<Route path="account" component={Account} />
		<IndexRoute component={Search} />
		</Route>
	</Router>
);

export default routes;

// var Routes = (
// 	<Router history={browserHistory}>
// 		<Route path="/FluxApp/" component={App}>
// 		<IndexRoute component={Home} />
// 		</Route>
// 	</Router>);