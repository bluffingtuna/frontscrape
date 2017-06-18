import React, {Component} from 'react';
import History from './History';
import Favorites from './Favorites';
import Contributions from './Contributions';

class User extends Component {
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		topic: '',
	// 		startYear: '',
	// 		endYear: ''
	// 	}
	// 	this.getSaved = this.getSaved.bind(this);
	// 	this.setParent = this.setParent.bind(this);
	// }
	// getSaved() {
	// 	this.child.getSaved();
	// }
	// setParent(topic, startYear, endYear) {
	// 	this.setState({
	// 		topic: topic,
	// 		startYear: startYear,
	// 		endYear: endYear
	// 	});
	// }
	render() {
		return (
			<div>
				<History />
				<Favorites />
				<Contributions />
			</div>
		);
	}
}

export default User;

			// <div>
			// 	<Search setParent={this.setParent}/>
			// 	<Results
			// 		topic={this.state.topic}
			// 		startYear={this.state.startYear}
			// 		endYear={this.state.endYear}
			// 		getSaved={this.getSaved}
			// 	/>
			// 	<Saved
			// 		ref={instance => { this.child = instance; }}
			// 	/>
			// </div>