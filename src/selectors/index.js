import {createSelector} from 'reselect';

const filtersGetter = state => state.filters;
const articlesGetter = state => state.articles;

export const filtrateArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filters) => {
    console.log('------','recomputing filtration');
    const {selected, dateRange} = filters;
    const {from, to} = dateRange;

    return articles
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

