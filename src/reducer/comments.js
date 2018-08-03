import {normalizedComments as defaultComments} from '../fixtures';
import {arrToMap} from "../helpers";
import {ADD_COMMENT} from "../constants";

const commentsMap = arrToMap(defaultComments);

export default (commentsState = commentsMap, action) => {
    const {type, payload, randomId} = action;
    console.log(111111);

    console.log(randomId);
    switch (type) {
        case ADD_COMMENT:
            return {
                ...commentsState,
                [randomId]: payload.comment

            }
    }

    return commentsState;
}
