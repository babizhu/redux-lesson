/**
 * Created by liu_k on 2016/3/15.
 * 保存用户自身的登陆,以及用户信息
 */

import { combineReducers } from 'redux';

const initialState = {
    nodes: ['aaa', 'bbb']
};

function menuData(state = initialState, action) {
    return state;
}
const sidebar = combineReducers({
    menuData
});
export default sidebar;