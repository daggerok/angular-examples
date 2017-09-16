import { Action } from 'redux';
import { Todo } from '../todo';

export interface BaseAction extends Action {
  type: string;
  by: any;
}

export interface AddTodoAction extends BaseAction {
  type: string;
  by: Todo;
}

export interface ToggleTodoAction extends BaseAction {
  type: string;
  by: number;
}

export type AppAction = AddTodoAction | ToggleTodoAction;

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const REMOVE_TODOS = 'REMOVE_TODOS';
