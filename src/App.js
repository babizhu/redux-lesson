import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './colors';
import { createStore } from 'redux'

import {run} from './base/app';
run();
//
//function counter(state = 0, action) {
//  switch (action.type) {
//    case 'INCREMENT':
//      return state + 1
//    case 'DECREMENT':
//      return state - 1
//    default:
//      return state
//  }
//}
//
//let store = createStore(counter);
//store.subscribe(() =>
//    console.log(store.getState())
//)
//
//// The only way to mutate the internal state is to dispatch an action.
//// The actions can be serialized, logged or stored and later replayed.
//store.dispatch({ type: 'INCREMENT' })
//// 1
//store.dispatch({ type: 'INCREMENT' })
//// 2
//store.dispatch({ type: 'DECREMENT' })

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.interval = setInterval(() => this.tick(), 1000);



  }

  tick() {
    this.setState({
      counter: this.state.counter + this.props.increment
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <h1 style={{ color: this.props.color }}>
        Counter ({this.props.increment}): {this.state.counter}
      </h1>
    );
  }
}


export class App extends Component {

  render() {
    return (
      <div>
        <Counter increment={1} color={NICE} />
        <Counter increment={5} color={SUPER_NICE} />
      </div>
    );
  }
}