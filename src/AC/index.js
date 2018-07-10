import {DELETE_ARTICLE, INCREMENT} from '../constants';

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle () {
    return {
        type: DELETE_ARTICLE
    }
}
