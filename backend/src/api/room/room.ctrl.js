import Room from '../../models/room';
import mongoose from 'mongoose';
import Joi from '@hapi/joi';

const { ObjectId } = mongoose.Types;

// 요청 검증 미들웨어
export const checkObjectId = (ctx, next) => {
    const { id } = ctx.params;
    if (!ObjectId.isValid(id)) {
        ctx.status = 400;   // Bad Request
        return ;
    }
    return next();
};

/*
    대화방 생성
    POST /api/room
    { title, body }
*/
export const create = async ctx => {
    
    // 요청 내용 검증
    const schema = Joi.object().keys({
        title: Joi.string().required(),
        body: Joi.string().required(),
        users: Joi.array().items(Joi.string()).required()
    });

    const result = schema.validate(ctx.request.body);
    if (result.error) {
        ctx.status = 400;   // Bad Request
        ctx.body = result.error;
        return;
    }

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
        const rooms = await Room.find().sort({ _id: -1 }).exec();    // reverse order
        ctx.body = rooms;
    
        // body의 길이가 100자 이상이면 내용 자르기
        ctx.body = rooms
            .map(room => room.toJSON())
            .map(room => ({
                ...room,
                body: room.body.length < 100 ? room.body : `${room.body.slice(0, 100)}...`
            }))

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

