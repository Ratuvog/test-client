export const TOGGLE_DRAWER = 'TOGGLE_DRAWER';
export const CHANGE_PAGE_TITLE = 'CHANGE_PAGE_TITLE';

export function toggleDrawer() {
  return {type: TOGGLE_DRAWER};
}

export function changePageTitle(title) {
  return {type: CHANGE_PAGE_TITLE, payload: { title } };
}



