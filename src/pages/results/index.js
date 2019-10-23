import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import './style';

import Result from '../../components/result';

const mapStateToProps = (state) => ({
	expoTitle: state.expoTitle.value,
	results: state.results
});

class Results extends Component {
	state = {
		currentExpo: { title: this.props.expoTitle, objects: [] }
	};

	render() {
		return (
			<section>
				<h2>Resultaten: {this.props.expoTitle} </h2>
				{this.props.results.map(result => {
					<Result result={result} />;
				})}
				<button onClick={() => console.log(this.props)}>hello</button>
			</section>
		);
	}
}


export default connect(mapStateToProps)(Results);
