import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

import Main from './Components/Main/Main';

function App() {
	return(
		<Provider store={store}>
			<Router>
				<Switch>
					<Route exact path={'/'} component={Main} />
				</Switch>
			</Router>
		</Provider>
	)
}

export default App