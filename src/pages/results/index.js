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

	render({ expoTitle, results }, {}) {
		return (
			<section>
				<h2>Resultaten: {expoTitle} </h2>
				{results.map(result => {
					<Result result={result} />;
				})}
			</section>
		);
	}
}


export default connect(mapStateToProps)(Results);
