/**
 * Created by liu_k on 2016/3/18.
 *
 */
import { combineReducers } from 'redux'

import {RECEIVE_POSTS} from '../actions/index';

function posts( state={}, action ){
    switch(action.type){
        case RECEIVE_POSTS:{
            return Object.assign({}, state, {
                [action.reddit]:action.content,
                reddit:action.reddit
            });
        }
    }
    return state;
}

const rootReducer = combineReducers({
    posts
})

export default rootReducer