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
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}
		return (
			<div className="container-fluid">
				<Navbar />
				{this.props.children}
				<button onClick={topFunction} id="myBtn" title="Go Back to Top">Back to Top</button>
				<Footer />
			</div>
		);
	}
}

export default Main;


