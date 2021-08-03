import { createAction, handleActions } from "redux-actions";
import { takeLatest, call } from "redux-saga";

const CHANGE_FIELD = 'write/CHANGE_FIELD';
const INITIALIZE = 'write/INITIALIZE';

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({ key, value }));
export const initialize = createAction(INITIALIZE);

export function* writeSaga() {}

const initialState = {
    title: '',
    body: '',
    room: null,
    roomError: null,
};

const write = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: { key, value} }) => ({
            ...state,
            [key]: value
        }),
        [INITIALIZE]: (state) => initialState,
    },
    initialState,
);

export default write;