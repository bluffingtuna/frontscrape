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
<div className="container-fluid">
	<div className="card">
		<div className="card-header text-center">
		Results
		</div>
		<div className="row">
		  <div className="col-2">
		  </div>
		  <div className="col-8">
			  <div className="card-block">
			    <h4 className="card-title"><a href="https://www.randomlists.com/urls" target="_blank">Generate random URLs - RandomLists</a></h4>
			    <p className="card-text">https://www.randomlists.com/urls</p>
			  </div>
			  <div className="card-block">
			    <h4 className="card-title"><a href="https://www.bing.com" target="_blank">Bing</a></h4>
			    <p className="card-text">https://www.bing.com</p>
			  </div>
			  <div className="card-block">
			    <h4 className="card-title"><a href="https://www.facebook.com" target="_blank">Facebook</a></h4>
			    <p className="card-text">https://www.facebook.com</p>
			  </div>
	<nav aria-label="Page navigation example">
	  <ul className="pagination justify-content-center">
	    <li className="page-item disabled">
	      <a className="page-link" href="#" tabIndex="-1">Previous</a>
	    </li>
	    <li className="page-item"><a className="page-link" href="#">1</a></li>
	    <li className="page-item"><a className="page-link" href="#">2</a></li>
	    <li className="page-item"><a className="page-link" href="#">3</a></li>
	    <li className="page-item">
	      <a className="page-link" href="#">Next</a>
	    </li>
	  </ul>
	</nav>
		  </div>
		  <div className="col-2">
		  </div>
		</div>
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

	// <a href="#" className="listings btn btn-primary">Save Favorite</a>
	// <a href="#" className="listings btn btn-primary">Save Favorite</a>
	// <a href="#" className="listings btn btn-primary">Save Favorite</a>