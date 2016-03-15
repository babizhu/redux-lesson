/**
 * Created by liu_k on 2016/3/15.
 * 保存用户自身的登陆信息
 */

import {USER_LOGIN,USER_LOGOUT} from '../actions/index';
import { combineReducers } from 'redux';

const initialState = {
    id: 0,
    name: 'guest',
    role: '',
    email: 'anonymous@abc.com',
    photoImg: '/1.jpg',
    address: '中国 重庆市 南岸区',
    menu: ['aaa']

};
/**
 * 先不考虑从网络取数据。。。这里提供一些测试数据
 * @type {{id: number, name: string, role: string, email: string, photoImg: string}}
 */
const userData = {
    id: 1,
    name: 'bbz',
    role: '',
    email: '185938@qq.com',
    photoImg: '/2.jpg',
    address: '中国 重庆市 南岸区',
    menu: ['aaa','bbb']
};

function userInfo(state = initialState, action) {
    switch (action.type) {
        case USER_LOGIN:
            return Object.assign({}, userData, {
                name: action.username
            });//测试只替换某个部分
        case USER_LOGOUT:
            return initialState;
        default:
            return state;
    }
}
const user = combineReducers({
    userInfo
});
export default user;