/**
 * Created by liu_k on 2016/3/11.
 */
export const ADD_USER = 'ADD_USER';
export function addUser(name) {
    return {type: ADD_USER, name};
}