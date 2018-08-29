import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import accordion from "../decorators/accordion";
import {connect} from 'react-redux';
import {filtrateArticlesSelector} from "../selectors";
import {loadAllArticles} from "../AC";
import Loader from './Loader';

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

    componentDidMount() {
        const {loaded, loading, loadAllArticles} = this.props;
        if(!loaded || !loading) {
            loadAllArticles();
        }
    }

    render() {
        const { articles, openItemId, toggleOpenItem, loading} = this.props;
        if (loading) {
            return <Loader/>
        }
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

export default connect((state) => {

    return {
        articles: filtrateArticlesSelector(state),
        loading: state.articles.loading,
        loaded: state.articles.loaded
    }
}, {loadAllArticles})(accordion(ArticleList));
