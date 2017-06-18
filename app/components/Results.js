import React, { Component } from 'react';
import API from '../utils/API';
import PanelResults from './PanelResults';

class Results extends Component {
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
<div className="card">
  <div className="card-header text-center">
    Results
  </div>
  <div className="card-block">
    <h4 className="card-title"><a href="https://www.google.com">Google</a><a href="#" className="listings btn btn-primary">Save Favorite</a></h4>
    <p className="card-text">https://www.google.com</p>
  </div>
  <div className="card-block">
    <h4 className="card-title"><a href="https://www.bing.com">Bing</a><a href="#" className="listings btn btn-primary">Save Favorite</a></h4>
    <p className="card-text">https://www.bing.com</p>
  </div>
  <div className="card-block">
    <h4 className="card-title"><a href="https://www.facebook.com">Facebook</a><a href="#" className="listings btn btn-primary">Save Favorite</a></h4>
    <p className="card-text">https://www.facebook.com</p>
  </div>
</div>
		);
	}
}

export default Results;

				// <div className="panel panel-default">
				//   	<div className="panel-heading">
				//     	<h3 className="panel-title">Results</h3>
				//   	</div>
				//   	<div className="panel-body">
				//   		{this.renderArticles()}
				//   	</div>
				// </div>