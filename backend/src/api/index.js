const Router = require('koa-router');

const room = require('./room');

const api = new Router();

api.use('/room', room.routes());

module.exports = api;