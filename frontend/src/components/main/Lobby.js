import React from 'react'
import RoomList from '../rooms/RoomList'
import styled from 'styled-components'
import ProfileContainer from '../../containers/main/ProfileContainer';
import CreateRoomContainer from '../../containers/main/CreateRoomContainer';

const TopBlock = styled.div`
    display: flex;

`;

const BottomBlock = styled.div`
    
`;

const Lobby = () => {
    return (
        <>
            <TopBlock>
                <CreateRoomContainer />
                <ProfileContainer />
            </TopBlock>
            
            <BottomBlock>
                <RoomList />
            </BottomBlock>
        </>
    )
}

export default Lobby
