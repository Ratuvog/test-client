export const LOCATION_CHANGE = 'LOCATION_CHANGE';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';

export function locationChange(location = '/') {
    return {type: LOCATION_CHANGE, payload: location}
}

export function setLoading(value) {
    return {type: SET_LOADING, value};
}

export function setError(error) {
    return {type: SET_ERROR, error};
}

// ------------------------------------
// Specialized Action Creator
// ------------------------------------
export const updateLocation = ({dispatch}) => {
    return (nextLocation) => dispatch(locationChange(nextLocation))
};

