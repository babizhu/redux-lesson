/**
 * Created by liu_k on 2016/1/28.
 * 用来学习redux最基础的例子，没有用户界面，纯粹是action、reducer、store的概念演示
 * 并将相关数据打印在console中
 */
/**
 * Created by liu_k on 2016/1/28.
 */
import { createStore } from 'redux'
import todoApp from './reducers'
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from './actions/';

export function run() {
    let store = createStore(todoApp);
// 打印初始状态
    console.log(store.getState());

// 监听 state 更新时，打印日志
    let unsubscribe = store.subscribe(() =>
        console.log(store.getState())
    );

// 发起一系列 action
    store.dispatch(addTodo('Learn about actions'));
    store.dispatch(addTodo('Learn about reducers'));
    store.dispatch(addTodo('Learn about store'));
    store.dispatch(completeTodo(0));
    store.dispatch(completeTodo(1));
    store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

    let a = [1,2,3,4];
    let b = a.map(x=>x*x);
    console.log('a的对象类型是' +Object.prototype.toString.call(a));
    console.log('b的对象类型是' +Object.prototype.toString.call(b));

    let aFunc = function(arg1){
        console.log(arg1+arg11);
    };
    function buildFunc(arg2){
        let arg={arg11:'is'};
        return ()=>(aFunc(arg2,arg));
    }
    let x = buildFunc("this");
    console.log('b的对象类型是' +Object.prototype.toString.call(x));
    x();

// 停止监听 state 更新
    unsubscribe();
}
