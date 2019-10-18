import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Provider, connect } from 'preact-redux';

import store from '../store';
import { results } from '../store/reducers';

import Home from '../pages/home';
import Results from '../pages/results';

class App extends Component {

	/** Gets fired when the route changes.
	  *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	  *	@param {string} event.url	The newly routed URL
  */

	handleRoute = event => {
		this.currentUrl = event.url;
	};

	render({ results }, { }) {
		return (
			<div id="app">
				<Provider store={store}>
					<Router onChange={this.handleRoute}>
						<Home path="/" />
						<Results path="/results" results={results} />
					</Router>
				</Provider>
			</div>
		);
	}
}

export default App;
