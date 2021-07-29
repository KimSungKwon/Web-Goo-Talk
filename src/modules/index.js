import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';   
import user, { userSaga } from './user';
import main, { mainSaga } from './main';

const rootReducer = combineReducers({
    user,
    main
});

export function* rootSaga() {
    yield all([userSaga(), mainSaga()]);    
}
export default rootReducer;