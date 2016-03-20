/**
 * Created by liu_k on 2016/3/18.
 *
 */

import 'fetch-detector'
import 'fetch-ie8'

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const REQUEST_POSTS = "REQUEST_POSTS";

function receivePosts(reddit, json) {
    return {
        type: RECEIVE_POSTS,
        reddit,
        content: json.data.children.map(child => child.data),
        isFetch:false
    }
}

export function requestPosts( reddit ){
    return{
        type: REQUEST_POSTS,
        isFetch:true,
        reddit
    }
}
export default function fetchPosts(reddit) {
    return dispatch => {
        dispatch(requestPosts(reddit))
        return fetch(`http://www.reddit.com/r/${reddit}.json`)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(reddit, json)))
    }
}
