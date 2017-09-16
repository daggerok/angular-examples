import { Todo } from './todo';

export interface AppState {
  todos: Todo[];
  lastUpdate: Date;
}

export const initialState: AppState = {
  todos: [],
  lastUpdate: null,
};

export function rootReducer(state, action) {
  return state;
}
