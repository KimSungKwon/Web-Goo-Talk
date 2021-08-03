import mongoose from 'mongoose';

const { Schema } = mongoose;

const RoomSchema = new Schema({
    title: String,
    body: String,
    users: [String],
    // publishedData : {}
});

const Room = mongoose.model('Room', RoomSchema);
export default Room;