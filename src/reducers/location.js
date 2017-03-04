import { LOCATION_CHANGE, SET_LOADING, SET_ERROR } from '../actions/location'
import { fromJS } from 'immutable'

const initialState = fromJS({
  loading: false,
  payload: null,
  error: ''
});

export default function locationReducer (state = initialState, action) {
  switch (action.type) {
    case (LOCATION_CHANGE): return state.set('payload', action.payload);
    case (SET_LOADING): return state.set('loading', action.value);
    case (SET_ERROR): return state.set('error', action.error);
  }

  return state
}
