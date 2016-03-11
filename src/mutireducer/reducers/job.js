/**
 * Created by liu_k on 2016/3/11.
 */
import { combineReducers } from 'redux';
import { UPDATE_VISIBILE,ADD_JOB } from '../actions/job/';

const initialState = {
    jobs: [],
    isShow: false
};

function setVisibile(state = true, action) {
    switch (action.type) {
        case UPDATE_VISIBILE:
            return action.isShow;
        default:
            return state;
    }
}
function jobs(state = [], action) {
    switch (action.type) {

        case ADD_JOB:
            return [...state, action.job]
        default:
            return state;
    }
}

const jobReducer = combineReducers({
    setVisibile,
    jobs
});

export default jobReducer;