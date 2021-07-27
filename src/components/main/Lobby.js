import React from 'react'
import RoomList from '../rooms/RoomList'
import styled from 'styled-components'
import CreateRoom from './CreateRoom';

const LobbyBlock = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        display:flex;
        align-self: center;
    }
`;

const Lobby = () => {
    return (
        <LobbyBlock>
            <CreateRoom />
            <h1>현재 참여 중인 대화방</h1>
            <RoomList />
        </LobbyBlock>
    )
}

export default Lobby
