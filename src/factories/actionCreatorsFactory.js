import {
  FETCH_ALL,
  FETCH_BY_ID,
  PLACE_ALL,
  PLACE_ONE,
  REMOVE,
  ON_REMOVED,
  UPSERT,
  actionName
} from '../constants/actionConstants';

export function createActions(entity, opts = { actions: {} }) {
  let actionsCreators = [
    FETCH_ALL,
    FETCH_BY_ID,
    PLACE_ALL,
    PLACE_ONE,
    REMOVE,
    ON_REMOVED,
    UPSERT
  ];

  let creators = {};
  actionsCreators.forEach((action) => {
    creators[action] = (params) => ({ type: actionName(entity, action), payload: params })
  });
  return Object.assign(creators, opts.actions);
}