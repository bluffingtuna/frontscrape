import React, { Component } from 'react';
import API from '../utils/API';
import PanelFavorites from './PanelFavorites';

class Favorites extends Component {
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
			<div>
				<p>Favorites - Testing</p>
				<PanelFavorites />
			</div>
		);
	}
}

export default Favorites;

				// <div className="panel panel-default">
				//   	<div className="panel-heading">
				//     	<h3 className="panel-title">Results</h3>
				//   	</div>
				//   	<div className="panel-body">
				//   		{this.renderArticles()}
				//   	</div>
				// </div>