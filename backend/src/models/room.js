import mongoose from 'mongoose';

const { Schema } = mongoose;

const RoomSchema = new Schema({
    title: String,
    body: String,
    users: [String],
    creater: {
        _id: mongoose.Types.ObjectId,
        username: String
    }
});

const Room = mongoose.model('Room', RoomSchema);
export default Room;