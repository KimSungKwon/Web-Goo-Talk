import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';   
import user, { userSaga } from './user';
import main, { mainSaga } from './main';
import write, { writeSaga } from './write';

const rootReducer = combineReducers({
    user,
    main,
    write
});

export function* rootSaga() {
    yield all([userSaga(), mainSaga(), writeSaga()]);    
}
export default rootReducer;