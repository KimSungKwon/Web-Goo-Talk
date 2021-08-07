import Router from 'koa-router';
import checkLoggedIn from '../../lib/checkLoggedIn';
import * as roomCtrl from './room.ctrl';

const room = new Router();

room.post('/', checkLoggedIn, roomCtrl.create);    // 대화방 생성
room.get('/', checkLoggedIn, roomCtrl.list);       // 대화방 목록 조회
room.get('/:id', checkLoggedIn, roomCtrl.checkObjectId, roomCtrl.enter);   // 특정 대화방 입장
room.delete('/:id', checkLoggedIn, roomCtrl.checkObjectId, roomCtrl.remove);   // 특정 대화방 삭제



export default room;