import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
    username: String,
    userId: String
});

UserSchema.statics.findByUserId = function(userId) {
    return this.findOne({ userId });
}

const User = mongoose.model('User', UserSchema);

export default User;