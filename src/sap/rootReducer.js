/**
 * Created by liu_k on 2016/3/15.
 * 集合所有功能模块的reducer
 *
 */

import { combineReducers } from 'redux';
import user from './profile/reducers/index';
import sidebar from './sidebar/reducers/index';


const rootReducer = combineReducers({
    user,
    sidebar
});
export default rootReducer;