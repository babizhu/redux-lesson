/**
 * Created by liu_k on 2016/1/29.
 */
import React, { Component } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import { connect } from 'react-redux';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from './actions/'


class TodoApp extends Component {
    render() {
        const { dispatch, visibleTodos, visibilityFilter,xx } = this.props;
        return (

            <div>
                <AddTodo onAddClick={text => dispatch(addTodo(text)) }/>
                <TodoList todos={this.props.visibleTodos} onTodoClick={index =>dispatch(completeTodo(index)) }/>
                <Footer filter={visibilityFilter} onFilterChange={ nextFilter =>dispatch(setVisibilityFilter(nextFilter)) }/>
                <h2>{xx}</h2>
            </div>
        );
    }
}

function selectTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
    }
}

// 基于全局 state ，哪些是我们想注入的 props ?
// 注意：使用 https://github.com/faassen/reselect 效果更佳。
function select(state) {
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter,
        xx:"我自己加的内容"
    };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(TodoApp);