import { createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
//import createLogger from 'redux-logger'
import rootReducer from '../reducers/index'

function compose(...funcs) {
    return (...args) => {
        if (funcs.length === 0) {
            return args[0]
        }

        const last = funcs[funcs.length - 1]
        const rest = funcs.slice(0, -1)

        return rest.reduceRight((composed, f) => f(composed), last(...args))
    }
}
function applyMiddleware(...middlewares) {
    return (createStore) => (reducer, initialState, enhancer) => {
        var store = createStore(reducer, initialState, enhancer)
        var dispatch = store.dispatch
        var chain = []

        var middlewareAPI = {
            getState: store.getState,
            dispatch: (action) => dispatch(action)
        }
        chain = middlewares.map(middleware => middleware(middlewareAPI))
        console.log(chain);
        dispatch = compose(...chain)(store.dispatch);
        console.log(dispatch);
        //return {
        //    store,
        //    dispatch
        //}
        return Object.assign({}, store, {
            dispatch
        });
    }
}


//
//function c1(arg){
//    console.log('c1');
//    return ()=>11 + arg;
//}
//
//function c2(arg){
//    console.log('c2');
//
//    return ()=>2 + arg;
//}
//
//function c3(arg){
//    console.log('c3');
//
//    return ()=>3 + arg;
//}
//let cfunc = compose(c1,c2,c3)(10)(11);
//console.log('compose(c1,c2)='+compose(c1,c2));
////
//console.log('compose(c1,c2,c3)(10) = ' + compose(c1,c2,c3)(10));
//console.log('compose(c1,c2,c3)(10)(11) = ' + cfunc);
//console.log('c1(c2(c3(10)))=' + c1(c2(c3(10))));
//
//let next = (action)=>{
//    console.log(action);
//};
//let func = (store)=>(next)=>(action)=>{
//    next( action );
//};
////console.log(func);
//
////console.log(func('store'));
//
//console.log( func('store')(next));

const logger = store => next => action => {
    console.log('begin log')
    let result = next(action)
    console.log('end log')
    return result
};

const logger2 = store => next => action => {
    console.log( store );
    console.log('begin log2')
    let result = next(action)
    console.log('end log2')
    return result
};


const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,logger,logger2
    //createLogger()
)(createStore);

console.log( logger('store'));
export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState)

    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('../reducers', () => {
        const nextRootReducer = require('../reducers');
        store.replaceReducer(nextRootReducer)
      })
    }

    return store
}
