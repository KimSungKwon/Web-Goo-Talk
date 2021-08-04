import Router from 'koa-router';
import * as roomCtrl from './room.ctrl';

const room = new Router();

room.post('/', roomCtrl.create);    // 대화방 생성
room.get('/', roomCtrl.list);       // 대화방 목록 조회
room.get('/:id', roomCtrl.checkObjectId, roomCtrl.enter);   // 특정 대화방 입장
room.delete('/:id', roomCtrl.checkObjectId, roomCtrl.remove);   // 특정 대화방 삭제



export default room;