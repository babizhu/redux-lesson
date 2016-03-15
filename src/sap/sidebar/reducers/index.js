/**
 * Created by liu_k on 2016/3/15.
 * 保存用户自身的登陆信息
 */

import { combineReducers } from 'redux';
//
////import user from '../../user/reducers/index'
//const initialState = {
//    nodes:['aaa','bbb']
//
//};
//
//
//function sidebar(state = initialState, action) {
//    switch (action.type) {
//        case USER_LOGIN:
//            return Object.assign({}, userData, {
//                name: action.username
//            });//测试只替换某个部分
//        case USER_LOGOUT:
//            return initialState;
//        default:
//            return state;
//    }
//}
//const sidebar = combineReducers({
//    initialState
//});
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