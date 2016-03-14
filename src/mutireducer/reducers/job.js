/**
 * Created by liu_k on 2016/3/11.
 *
 */
import { combineReducers } from 'redux';
import { UPDATE_VISIBLE,ADD_JOB,UPDATE_JOB } from '../actions/job/';


function setVisible(state = true, action) {
    switch (action.type) {
        case UPDATE_VISIBLE:
            return action.isShow;
        default:
            return state;
    }
}

function jobs(state = [], action) {
    switch (action.type) {

        case ADD_JOB:
            return [...state, action.job];
        case UPDATE_JOB:
            return [
                ...state.slice(0, action.index),
                action.job,
                ...state.slice(action.index + 1)
            ];
        default:
            return state;
    }
}

const jobReducer = combineReducers({
    setVisible,
    jobs
});

export default jobReducer;