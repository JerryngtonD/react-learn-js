import React, {Component} from 'react';
import Article from './Article';

export default class ArticleList extends Component  {
	state = {
		openArticleId: null,
		closed: true
	};

	render() {
	    const articleElements = this.props.articles.map((article) =>
	     	<li key = {article.id}>
	    		<Article 
	    			article = {article}
	    			isOpen = {article.id === this.state.openArticleId && this.state.closed }
	    			toggleOpen ={this.toggleOpenArticle(article.id)}
	    		/>
	    	</li>);
	    	
	    return (
	        <ul>
	            {articleElements}
	        </ul>
	    )
	}

	toggleOpenArticle = (openArticleId) => ev => {
		this.setState({
			openArticleId,
			closed: !this.state.closed
		})
	}
}

