/**
 * Created by liu_k on 2016/3/18.
 *
 */
import { combineReducers } from 'redux'

import {RECEIVE_POSTS,REQUEST_POSTS} from '../actions/index';

const initState={
    reddit:'',
    isFetch:false,
    reactjs:[],
};

function posts(state = {}, action) {
    switch (action.type) {
        case RECEIVE_POSTS:
        {
            return Object.assign({}, state, {
                [action.reddit]: action.content,
                reddit: action.reddit,
                isFetch:action.isFetch
            });
        }
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                reddit: action.reddit,
                isFetch: action.isFetch
            });
    }
    return state;
}

const rootReducer = combineReducers({
    posts
});

export default rootReducer