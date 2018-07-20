import { UPDATE_TAB } from './types';

export function setTab(tabName) {
    return (dispatch) => {
        dispatch({ type: UPDATE_TAB, payload: tabName });
    };
}
