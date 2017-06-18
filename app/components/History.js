import React, { Component } from 'react';

class History extends Component {
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		topic: '',
	// 		startYear: '',
	// 		endYear: ''
	// 	};
	// 	this.handleInputChange = this.handleInputChange.bind(this);
	// 	this.handleButtonClick = this.handleButtonClick.bind(this);
	// }
	// handleInputChange(event) {
	// 	this.setState({ [event.target.name]: event.target.value });
	// }
	// handleButtonClick() {
	// 	this.props.setParent(this.state.topic, this.state.startYear, this.state.endYear);
	// }
	render() {
		return (
<div className="card">
  <div className="card-header text-center">
    History
  </div>
  <div className="card-block">
<div class="card">
  <div class="card-block">
    <h4 className="card-title">Google<a href="www.google.com" className="listings btn btn-danger">Erase History</a></h4>
    <p className="card-text">www.google.com</p>
  </div>
</div>
  </div>
</div>
		);
	}
}

export default History;

				// <div className="panel panel-default">
				//   	<div className="panel-heading">
				//     	<h3 className="panel-title">Search</h3>
				//   	</div>
				//   	<div className="panel-body">
				//   		<label htmlFor="topic">Topic</label>
				//     	<input
				//     		type="text"
				//     		className="form-control"
				//     		id="topic"
				//     		name="topic"
				//     		value={this.state.topic}
				// 			onChange={this.handleInputChange}
				// 		/>
				// 		<br/>
				//   		<label htmlFor="startYear">Start Year (optional)</label>
				//     	<input
				//     		type="number"
				//     		className="form-control"
				//     		id="startYear"
				//     		name="startYear"
				//     		value={this.state.startYear}
				// 			onChange={this.handleInputChange}
				// 		/>
				// 		<br/>
				//   		<label htmlFor="endYear">End Year (optional)</label>
				//     	<input
				//     		type="number"
				//     		className="form-control"
				//     		id="endYear"
				//     		name="endYear"
				//     		value={this.state.endYear}	
				// 			onChange={this.handleInputChange}
				// 		/>
				// 		<br/>
				// 		<div id="searchSubmitDiv">
				// 			<button
				// 				onClick={this.handleButtonClick}
				// 				className="btn btn-default"
				// 			>
				// 				Submit
				// 			</button>
				// 		</div>
				//   	</div>
				// </div>