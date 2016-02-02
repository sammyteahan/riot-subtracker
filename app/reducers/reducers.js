/**
* @name reducers
*/

export function submissionReducer(state={}, action) {
  switch(action.type) {
    case 'RECEIVE_SUBMISSIONS':
      return Object.assign({}, state, {
        items: action.data
      });
    case 'SUBMISSION_ADDED':
      return Object.assign({}, state, {
        items: [...state.items, action.data]
      });
    case 'SUBMISSION_DELETED':
      return Object.assign({}, state, {
        items: [
          ...state.items.slice(0, action.index),
          ...state.items.slice(action.index + 1)
        ]
      });
    default:
      return state;
  }
}

export function sweepsReducer(state={}, action) {
  switch(action.type) {
    case 'RECEIVE_SWEEPS':
      return Object.assign({}, state, {
        items: action.data
      });
    case 'SWEEP_ADDED':
      return Object.assign({}, state, {
        items: [...state.items, action.data]
      });
    case 'SWEEP_DELETED':
      return Object.assign({}, state, {
        items: [
          ...state.items.slice(0, action.index),
          ...state.items.slice(action.index + 1)
        ]
      });
    default:
      return state;
  }
}