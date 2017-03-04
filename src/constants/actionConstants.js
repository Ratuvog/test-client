export const actionName = (entity, action) => [action,entity.toUpperCase()].join('_');

export const FETCH_ALL = 'FETCH_ALL';
export const FETCH_BY_ID = 'FETCH_BY_ID';
export const PLACE_ALL = 'PLACE_ALL';
export const PLACE_ONE = 'PLACE_ONE';
export const REMOVE = 'REMOVE';
export const ON_REMOVED = 'ON_REMOVED';
export const UPSERT = 'UPSERT';
