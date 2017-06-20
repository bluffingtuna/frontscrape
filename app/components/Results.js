import React, { Component } from 'react';
import API from '../utils/API';
import PanelResults from './PanelResults';

class Results extends Component {
	constructor() {
		super();
		this.state = {
			results: []
		}
		// this.getArticles = this.getArticles.bind(this);
		// this.getSaved = this.getSaved.bind(this);
		this.renderResults = this.renderResults.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		// console.log('TAG');
		// this.getArticles();
		API.getResults(nextProps.query).then((res) => {
			// console.log(res.data.response.docs);
			this.setState({results: res.data.response.docs});
		});
	}
	// getSaved() {
	// 	this.props.getSaved();
	// }
	renderResults() {
		return this.state.results.map(result => (
			<PanelResults
				result={result}
				key={result._id}
				// getSaved={this.getSaved}
			/>
		));
	}
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
					  	  {this.renderResults()}
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
						      <li className="page-item">
						        <a className="page-link" href="#" aria-label="Previous">
						          <span aria-hidden="true">&laquo;</span>
						          <span className="sr-only">Previous</span>
						        </a>
						      </li>
						      <li className="page-item"><a className="page-link" href="#">1</a></li>
						      <li className="page-item"><a className="page-link" href="#">2</a></li>
						      <li className="page-item"><a className="page-link" href="#">3</a></li>
					    	  <li className="page-item">
						        <a className="page-link" href="#" aria-label="Next">
						          <span aria-hidden="true">&raquo;</span>
						          <span className="sr-only">Next</span>
						        </a>
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