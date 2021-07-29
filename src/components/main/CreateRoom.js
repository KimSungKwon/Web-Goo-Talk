import React from 'react'
import styled from 'styled-components'
import FriendListContainer from '../../containers/main/FriendListContainer';

const CreateRoomBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    margin-top: 1rem;
    border: 3px solid;
    width: 50%;
    h1 {
        display: flex;
        align-self: center;
    }
`;

const Wrapper = styled.div`
    display: flex;

`;

const CreateRoom = () => {
    return (
        <CreateRoomBlock>
            <h1>대화방 개설하기</h1>
            <Wrapper>
                <FriendListContainer />
            </Wrapper>
        </CreateRoomBlock>
    )
}

export default CreateRoom
