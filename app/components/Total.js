import React, { Component } from 'react';
import API from '../utils/API';

class Total extends Component {
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		articles: []
	// 	}
	// 	// this.getArticles = this.getArticles.bind(this);
	// 	this.getSaved = this.getSaved.bind(this);
	// 	this.renderArticles = this.renderArticles.bind(this);
	// }
	// componentWillReceiveProps(nextProps) {
	// 	// console.log('TAG');
	// 	// this.getArticles();
	// 	API.getArticles(nextProps.topic, nextProps.startYear, nextProps.endYear).then((res) => {
	// 		// console.log(res.data.response.docs);
	// 		this.setState({articles: res.data.response.docs});
	// 	});
	// }
	// getSaved() {
	// 	this.props.getSaved();
	// }
	// renderArticles() {
	// 	return this.state.articles.map(article => (
	// 		<Panel1
	// 			article={article}
	// 			key={article._id}
	// 			getSaved={this.getSaved}
	// 		/>
	// 	));
	// }
	render() {
		return (
<div className="card text-center">
  <div className="card-header">
    Total
  </div>
  <div className="card-block">
    <h4 className="card-title">Special title treatment</h4>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
		);
	}
}

export default Total;

				// <div className="panel panel-default">
				//   	<div className="panel-heading">
				//     	<h3 className="panel-title">Results</h3>
				//   	</div>
				//   	<div className="panel-body">
				//   		{this.renderArticles()}
				//   	</div>
				// </div>