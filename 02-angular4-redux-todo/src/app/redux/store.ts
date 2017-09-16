import { initialState } from './state';
import { ADD_TODO, REMOVE_TODO, REMOVE_TODOS, TOGGLE_TODO, } from './actions';

export function rootReducer(state, action: any) {
  const stateTodos = state.todos;
  const lastUpdate = { lastUpdate: new Date() };

  switch (action.type) {

    case ADD_TODO:
      const { by: todoAdd } = action;
      todoAdd.id = stateTodos.length;
      return {
        ...state,
        todos: [
          ...stateTodos,
          todoAdd,
        ],
        ...lastUpdate,
      };

    case TOGGLE_TODO:
      const todoToggle = stateTodos.find(todo => todo.id === action.by);
      const toggleIndex = stateTodos.indexOf(todoToggle);
      return {
        ...state,
        todos: [
          ...stateTodos.slice(0, toggleIndex),
          {
            ...todoToggle, isCompleted: !todoToggle.isCompleted,
          },
          ...stateTodos.slice(toggleIndex + 1),
        ],
        ...lastUpdate,
      };

    case REMOVE_TODO:
      return {
        ...stateTodos.filter(todo => todo.id !== action.by),
        ...lastUpdate,
      };

    case REMOVE_TODOS:
      return {
        ...initialState,
        ...lastUpdate,
      };

    default:
      return state;
  }
}
