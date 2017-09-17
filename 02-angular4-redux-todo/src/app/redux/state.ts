import { Todo } from '../todo/todo';

export interface AppState {
  todos: Todo[];
  lastUpdate: Date;
}

export const initialState: AppState = {
  todos: [],
  lastUpdate: null,
};
