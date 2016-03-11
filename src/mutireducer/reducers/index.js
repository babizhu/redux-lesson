/**
 * Created by liu_k on 2016/1/28.
 */
import { combineReducers } from 'redux';

import jobReducer from './job';
import userReducer from './user';


const rootApp = combineReducers({
    userReducer,
    jobReducer
});
//console.log( (rootApp));
export default rootApp;