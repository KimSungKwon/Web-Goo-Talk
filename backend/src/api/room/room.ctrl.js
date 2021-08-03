let roomId = 0;
const rooms = [];

/*
    대화방 생성
    POST /api/room
    { title, body }
*/
exports.create = ctx => {
    const { title, body, users } = ctx.request.body;
    roomId += 1;
    const room = { id: roomId, title, body, users };
    rooms.push(room);
    ctx.body = room;
};

/*
    대화방 목록 조회
    GET /api/room
*/
exports.list = ctx => {
    ctx.body = rooms;
};

/*
    특정 대화방 입장
    GET /api/room/:id
*/
exports.enter = ctx => {
    const { id } = ctx.params;
    const room = rooms.find(e => e.id.toString() == id);

    if (!room) {
        ctx.status = 404;
        ctx.body = {
            message: '대화방이 존재하지 않습니다.'
        };
        return;
    }
    ctx.body = room;
};

/*
    특정 대화방 삭제
    DELETE /api/room/:id
*/
exports.remove = ctx => {
    const { id } = ctx.params;
    const index = rooms.findIndex(e => e.id.toString() == id);

    if (index === -1) {
        ctx.status = 404;
        ctx.body = {
            message: '대화방이 존재하지 않습니다.'
        };
        return;
    }
    rooms.splice(index, 1);
    ctx.status = 204    // No Content
};

