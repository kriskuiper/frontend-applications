import { h, Component } from 'preact';
import { Router } from 'preact-router';

// Code-splitting is automated for routes
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
		return (
			<div id="app">
				<Router onChange={this.handleRoute}>
					<Home path="/" />
				</Router>
			</div>
		);
	}
}
