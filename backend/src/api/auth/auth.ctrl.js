import User from '../../models/user';
import Joi from '@hapi/joi';

/*
    POST /api/auth/register
    {
        username: 'googleName',
        userId: 'googleId'
    }
*/
export const register = async ctx => {
    const { username, userId } = ctx.request.body;
    try {
        const exists = await User.findByUserId(userId);
        if (exists) {
            ctx.status = 409;   // Conflict
            return;
        }

        const user = new User({
            username,
            userId,
        });
        await user.save();  // Save to DataBase
        
        const data = user.toJSON();
        ctx.body = data;

        // Save JWT into cookies
        const token = user.generateToken();
        ctx.cookies.set('access_token', token, {
            maxAge: 1000 * 60 * 60 * 24 * 7,     // 7 days
            httpOnly: true
        });

    } catch (e) {
        ctx.throw(500, e);
    }
}

/*
    POST /api/auth/login
    {
        "username": "username",
        "userId": "googleId"
    }
*/
export const login = async ctx => {
    const { userId } = ctx.request.body;
    
    try {
        const user = await User.findByUserId(userId);
        
        if (!user) {
            ctx.status = 401;
            return;
        }

        const data = user.toJSON();
        ctx.body = data;

        // Save JWT into cookies
        const token = user.generateToken();
        ctx.cookies.set('access_token', token, {
            maxAge: 1000 * 60 * 60 * 24 * 7,     // 7 days
            httpOnly: true
        });
        
    } catch (e) {
        ctx.throw(500, e);
    }
};

/*
    GET /api/auth/check
*/
export const check = async ctx => {
    const { user } = ctx.state;
    if (!user) {
        ctx.status = 401;
        return;
    }
    console.log(user);
    ctx.body = user;
};

/*
    POST /api/auth/logout
*/
export const logout = async ctx => {
    ctx.cookies.set('access_token');
    ctx.status = 204;
};