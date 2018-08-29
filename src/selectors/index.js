import {createSelector} from 'reselect';
import {mapToArr} from "../helpers";

const filtersGetter = state => state.filters;
const articlesGetter = state => state.articles.entities;
const commentsGetter = state => state.comments;
const idGetter = (state, props) => props.id;

export const filtrateArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filters) => {
    console.log('------','recomputing filtration');
    const {selected, dateRange} = filters;
    const {from, to} = dateRange;

    return mapToArr(articles)
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
});


export const commentSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
    console.log('getting comment');
    return comments[id];
});
