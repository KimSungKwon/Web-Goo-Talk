import client from './client'

export const createRoom = ({ title, body, users }) => {
    client.post('/api/create', { title, body, users });
}

export const enterRoom = id => client.get(`/api/room/${id}`);