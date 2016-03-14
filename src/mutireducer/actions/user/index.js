/**
 * Created by liu_k on 2016/3/11.
 *
 */
export const USER_ADD = 'USER_ADD';
export const USER_LOGIN = 'USER_LOGIN';

export function addUser(name) {
    return {type: USER_ADD, name};
}

export function loginUser( name, password ){
    return {type: USER_LOGIN, name, password};

}