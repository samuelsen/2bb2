// src/container.js

import { connect } from 'react-redux'
import * as todoComponents from '../components/todoList';
import { addTodo, toggleTodo } from '../actions/todoActions';

export const TodoList = connect(
  function mapStateToProps(state) {
    return { todos: state.todoList.get('todos') };
  },
  function mapDispatchToProps(dispatch) {
    return {
      addTodo: text => dispatch(addTodo(text)),
      toggleTodo: id => dispatch(toggleTodo(id))
    };
  }
)(todoComponents.TodoList);
