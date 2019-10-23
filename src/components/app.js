import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Provider } from 'preact-redux';

import store from '../store';

import Home from '../pages/home';
import Results from '../pages/results';
import Expos from '../pages/expos';

class App extends Component {

	/** Gets fired when the route changes.
	  *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	  *	@param {string} event.url	The newly routed URL
  */

	handleRoute = event => {
		this.currentUrl = event.url;
	};

	render() {
		return (
			<div id="app">
				<Provider store={store}>
					<Router onChange={this.handleRoute}>
						<Home path="/" />
						<Results path="/results" />
						<Expos path="/expos" />
					</Router>
				</Provider>
			</div>
		);
	}
}

export default App;
