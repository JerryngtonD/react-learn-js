import {INCREMENT} from "../constants";

export default (count = 0, action) => {
    const {type} = action;
    switch(type) {
        case INCREMENT: return ++count;
    }

    return count;
}
