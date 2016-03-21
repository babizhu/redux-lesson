/**
 * Created by liu_k on 2016/3/18.
 *
 */
import { createStore } from 'redux'
import rootReducer from './reducers/index';
import fetchPosts from './actions/index'

import configureStore from './store/configureStore'

export function run() {
    let store = configureStore();
// 打印初始状态
    console.log(store.getState());

// 监听 state 更新时，打印日志
    let unsubscribe = store.subscribe(() =>
        console.log(store.getState())
    );

// 发起一系列 action
    store.dispatch(fetchPosts('reactjs'));
    store.dispatch(fetchPosts('front'));


    let todos=[
        {
            text:'a',
            isComplete:true
        },
        {
            text:'ab',
            isComplete:false
        },
        {
            text:'abc',
            isComplete:true
        },
    ]

    const completedCount = todos.reduce((count, todo) =>
            todo.isComplete ? count + 1 : count,  0
    );
    console.log('todos completed = ' + completedCount);
}