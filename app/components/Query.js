import React, { Component } from 'react';

class Query extends Component {
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
<div className="container-fluid">
	<div className="card text-center">
	  <div className="card-header">
	    Query
	  </div>
	  <div className="card-block">
	<div className="form-group row">
	  <div className="col-2">
	  </div>
	  <div className="col-8">
	    <input className="form-control border-top-0 border-left-0 border-right-0 text-center" type="search" id="example-search-input" placeholder="Please enter a search query!"/>
	    <br/>
	    <a type="button" className="btn bg-inverse text-white" title="Click to Search">Search</a>
	  </div>
	  <div className="col-2">
	  </div>
	</div>
	  </div>
	</div>
</div>
		);
	}
}

export default Query;

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