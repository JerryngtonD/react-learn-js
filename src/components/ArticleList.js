import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import accordion from "../decorators/accordion";
import {connect} from 'react-redux';

class ArticleList extends Component {

    static propTypes = {
        articles: PropTypes.array.isRequired,
        selected: PropTypes.array,
        dateRange: PropTypes.shape({
            from: PropTypes.object,
            to: PropTypes.object
        }),
        //from accordion
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    };

    render() {
        const { articles, openItemId, toggleOpenItem } = this.props;
        const articleElements = articles.map(article =>
                    <li key={article.id}>
                        <Article
                            article={article}
                            isOpen={article.id === openItemId}
                            toggleOpen={toggleOpenItem(article.id)}
                        />
                    </li>
                );

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default connect(({filters, articles }) => {
    const {selected, dateRange} = filters;
    const {from, to} = dateRange;

    const filterArticles = articles

        .filter(article => {
            if (!selected) {
                return true;
            }
            if(!selected.length) {
                return true;
            }
            return selected.find(select => select === article.id)
        })

        .filter(article => {
            const current= new Date(article.date);
            if (!to) {
                return true
            }
            return current >= from && current <= to;
        });

    console.log(filterArticles);

    return {
        articles: filterArticles
    }
})(accordion(ArticleList));
