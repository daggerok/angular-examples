import { Injectable } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { AppState } from '../redux/state';
import { ADD_TODO, REMOVE_TODO, REMOVE_TODOS, TOGGLE_TODO } from '../redux/actions';
import { Todo } from './todo';

@Injectable()
export class TodoService {

  @select('todos') todos;
  @select('lastUpdate') lastUpdate;

  constructor(private ngRedux: NgRedux<AppState>) {}

  public addTodo(by: Todo) {
    this.ngRedux.dispatch({
      type: ADD_TODO,
      by,
    });
  }

  public toggleTodo(by: number) {
    this.ngRedux.dispatch({
      type: TOGGLE_TODO,
      by,
    });
  }

  public removeTodo(by: number) {
    this.ngRedux.dispatch({
      type: REMOVE_TODO,
      by,
    });
  }

  public removeTodos() {
    this.ngRedux.dispatch({
      type: REMOVE_TODOS,
    });
  }
}
