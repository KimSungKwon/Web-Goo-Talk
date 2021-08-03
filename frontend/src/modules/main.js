import { createAction, handleActions } from 'redux-actions'
import { takeLatest, call } from 'redux-saga';

const CHANGE_FIELD = 'main/CHANGE_FIELD';

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({ key, value }));

export function* mainSaga() {}

const initialState = {
    main: null,
    checkError: null,
};

const main = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: { key, value} }) => ({
            ...state,
            [key]: value
        }),
    }, 
    initialState
);

export default main;