/**
 * Created by liu_k on 2016/3/11.
 *
 */
export const UPDATE_VISIBILE = 'UPDATE_VISIBILE';
export const ADD_JOB = 'ADD_JOB';

export function updateVisibile(isShow) {
    return {type: UPDATE_VISIBILE, isShow};
}

export function addJob(job) {
    return {type: ADD_JOB, job}
}