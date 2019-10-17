import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Provider , useSelector } from 'react-redux';

import store from '../store';

import Home from '../pages/home';

export default class App extends Component {

	/** Gets fired when the route changes.
	  *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	  *	@param {string} event.url	The newly routed URL
  */

	handleRoute = event => {
		this.currentUrl = event.url;
	};

	render() {
		const results = useSelector(state => state.results);

		return (
			<div id="app">
				<Provider store={store}>
				<Router onChange={this.handleRoute}>
					<Home path="/" />
				</Router>
				</Provider>
			</div>
		);
	}
}
