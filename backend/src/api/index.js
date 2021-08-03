import Router from 'koa-router';
import room from './room';

const api = new Router();

api.use('/room', room.routes());

export default api;