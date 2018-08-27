import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer';
import logger from '../middlewares/logger';
import randomId from '../middlewares/randomId';
import api from '../middlewares/api';

                                //order of middlewares is important !!!
const enhancer = applyMiddleware(randomId, api, logger);

const store = createStore(reducer, {}, enhancer);

//dev only
window.store = store;

export default store;
