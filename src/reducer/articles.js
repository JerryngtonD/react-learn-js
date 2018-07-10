import {articles as defaultArticles} from '../fixtures';
import {DELETE_ARTICLE} from "../constants";

export default (articleState = defaultArticles, action) => {
    const type = {action};

    switch (type) {
        case DELETE_ARTICLE: return articleState;
    }

    return articleState;
}
