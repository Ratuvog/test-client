import {TOGGLE_DRAWER, CHANGE_PAGE_TITLE} from '../actions/ui';

const initialState = {
  drawerIsOpened: false,
  pageTitle: ''
};

export default function ui(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return Object.assign({}, state, { drawerIsOpened: !state.drawerIsOpened });
    case CHANGE_PAGE_TITLE:
      return  Object.assign({}, state, { pageTitle: action.payload.title });
    default:
      return state;
  }
}
