import React, {Component} from 'react';
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

class Main extends Component {
	constructor(props) {
		super(props);
		// this.state = {
		// 	topic: '',
		// 	startYear: '',
		// 	endYear: ''
		// }
		// this.getSaved = this.getSaved.bind(this);
		// this.setParent = this.setParent.bind(this);
	}
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
			<div className="container-fluid">

				{this.props.children}

			</div>
		);
	}
}

export default Main;

				// <Navbar />
				// <Footer />