import Router from 'koa-router';
import room from './room';
import auth from './auth';

const api = new Router();

api.use('/room', room.routes());
api.use('/auth', auth.routes());

export default api;