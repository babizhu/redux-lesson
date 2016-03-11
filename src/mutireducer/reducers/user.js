/**
 * Created by liu_k on 2016/3/11.
 */
import { combineReducers } from 'redux';
import { ADD_USER } from '../actions/user/';

const initialState = {
    users: []
};



function users(state = initialState, action) {
    switch (action.type){
        case ADD_USER:
            return [...state, action.name];
        default:
            return state;
    }
}

const userReducer = combineReducers({
    users
});

export default userReducer;