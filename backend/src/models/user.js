import mongoose, { Schema } from 'mongoose';
import jwt from 'jsonwebtoken';

const UserSchema = new Schema({
    username: String,
    userId: String
});

UserSchema.statics.findByUserId = function(userId) {
    return this.findOne({ userId });
};

UserSchema.methods.generateToken = function() {
    const token = jwt.sign(
        {
            _id: this.id,
            username: this.username,
            userId: this.userId
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '7d'
        }
    );
    return token;
};

const User = mongoose.model('User', UserSchema);

export default User;