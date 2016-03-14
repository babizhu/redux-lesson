/**
 * Created by liu_k on 2016/3/11.
 *
 */
import { combineReducers } from 'redux';
import { USER_ADD,USER_LOGIN } from '../actions/user/';


function users(state = [], action) {
    switch (action.type){
        case USER_ADD:
            return [...state, action.name];
        default:
            return state;
    }
}

function login( state=null,action){
    switch (action.type) {
        case USER_LOGIN:

            if (action.name != 'bbz') {
                return null;
            }
            return {
                name: 'liulaoye',
                role: 'admin',
                score: 100
            }
        default:
            return state;
    }
}

const userReducer = combineReducers({
    users,
    login
});

export default userReducer;