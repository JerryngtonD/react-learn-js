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
        console.log(this.props);
        const { articles, openItemId, toggleOpenItem, selected, dateRange } = this.props;
        console.log(selected);
        const articleElements = articles

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
                const {to, from} = dateRange;
                const current= new Date(article.date);
                if (!to) {
                   return true
                }
                return current >= from && current <= to;
            })

            .map(article =>
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

export default connect(state => ({
    articles: state.articles,
    selected: state.filters.selected,
    dateRange: state.filters.dateRange
}))(accordion(ArticleList));
