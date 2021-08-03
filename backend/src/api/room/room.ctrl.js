import Room from '../../models/room';

/*
    대화방 생성
    POST /api/room
    { title, body }
*/
export const create = async ctx => {
    const { title, body, users } = ctx.request.body;
    const room = new Room({
        title,
        body,
        users,
    });
    try {
        await room.save();
        ctx.body = room;
    } catch (e) {
        ctx.throw(500, e);
    }
};

/*
    대화방 목록 조회
    GET /api/room
*/
export const list = async ctx => {
    try {
        const room = await Room.find().exec();
        ctx.body = room;
    } catch (e) {
        ctx.throw(500, e);
    }
};

/*
    특정 대화방 입장
    GET /api/room/:id
*/
export const enter = async ctx => {
    const { id } = ctx.params;
    try {
        const room = await Room.findById(id).exec();
        if (!room) {
            ctx.status = 404;
            return;
        }
        ctx.body = room;
    } catch (e) {
        ctx.throw(500, e);
    }
};

/*
    특정 대화방 삭제
    DELETE /api/room/:id
*/
export const remove = async ctx => {
    const { id } = ctx.params;
    try {
        await Room.findByIdAndRemove(id).exec();
        ctx.status = 204;   // Success
    } catch (e) {
        ctx.throw(500, e);
    }
};

