import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

class ArticleList extends Component {

    static propTypes = {
        articles: PropTypes.array.isRequired,
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    };

    render() {
        const {articles, openItemId, toggleOpenItem} = this.props;
        const articleElements = articles.map((article) => <li key={article.id}>
            <Article
                article={article}
                isOpen={article.id === openItemId}
                toggleOpen={toggleOpenItem(article.id)}
            />
        </li>);
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

