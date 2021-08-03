import { createAction, handleActions } from 'redux-actions'
import { takeLatest, call } from 'redux-saga';

const CHANGE_FIELD = 'user/CHANGE_FIELD';

const LOGIN = 'user/LOGIN';
const LOGIN_SUCCESS = 'user/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'user/LOGIN_FAILURE';
const LOGOUT = 'user/LOGOUT'
const TEMP_SET_USER = 'user/TEMP_SET_USER'

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({ key, value }));
export const login = createAction(LOGIN, ({ username, userId }) => ({ username, userId }));
export const logout = createAction(LOGOUT);
export const tempSetUser = createAction(TEMP_SET_USER, user => user);

function* logoutSaga() {}

export function* userSaga() {}

const initialState = {
    user: null,
    checkError: null,
};

const user = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: { key, value} }) => ({
            ...state,
            [key]: value
        }),
    }, 
    initialState
);

export default user;