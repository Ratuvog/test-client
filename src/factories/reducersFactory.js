import {
  PLACE_ALL,
  PLACE_ONE,
  ON_REMOVED,
  actionName
} from '../constants/actionConstants';

export function createReducers(entity, opts = { reducers: [] }) {
  const initialState = [];

  return (state = initialState, action) => {
    for(let i = 0; i < opts.reducers.length; ++i) {
      if (action.type === opt.reducers[i].type) {
        return opts.reducers[i].fn(state, action);
      }
    }
    if (action.type === actionName(entity, PLACE_ALL)) {
      return action.payload;
    }

    if (action.type === actionName(entity, PLACE_ONE)) {
      action.payload.active = true;
      let newState = state.filter((item) => item.id !== action.payload.id);
      newState.push(action.payload);
      return newState;
    }

    if (action.type === actionName(entity, ON_REMOVED)) {
      return state.filter((item) => item.id !== action.payload);
    }

    return state;
  }
}