/**
 * Created by liu_k on 2016/3/11.
 *
 *
 */
export const UPDATE_VISIBLE = 'UPDATE_VISIBLE';
export const UPDATE_JOB = 'UPDATE_JOB';
export const ADD_JOB = 'ADD_JOB';

export function updateVisible(isShow) {
    return {type: UPDATE_VISIBLE, isShow};
}

export function updateJob( index, job ){
    return{
        type:UPDATE_JOB,
        index,
        job
    }
}

export function addJob(job) {
    return {type: ADD_JOB, job}
}