import {Map} from 'immutable';

export function arrToMap(arr) {
    return arr.reduce((acc, item) => acc.set(item.id, item), new Map({}))
}

export function mapToArr(obj) {
    return obj.valueSeq().toArray();
}
