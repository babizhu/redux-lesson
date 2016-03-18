export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export function userLogin( username, pass ) {
    return {
        type: USER_LOGIN,
        username,
        pass,
        error:''
    };
}

export function userLogout() {
    return {
        type: USER_LOGOUT
    }
}
