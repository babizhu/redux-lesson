import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './colors';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

//import {run} from './base/app';
//import {run} from './mutireducer/app';
import {run} from './async/base/app';
import rootReducer from './sap/rootReducer';
import Sap from './sap/app'
run();
//import TodoApp from './todos/TodoApp';
//
//import todoApp from './todos/reducers/'

//import rootApp from './mutireducer/reducers/'
//console.log( "rootApp = " + rootApp );
//run();

let store = createStore(rootReducer);
export class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Sap/>
            </Provider>
        );
    }
}