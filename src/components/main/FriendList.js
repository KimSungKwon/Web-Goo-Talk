import React from 'react'
import styled from 'styled-components'

const FriendListBlock = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #b3fde4;
    justify-content: space-between;
    width: 20%;
    min-width: 170px;
`;

const FriendItemBlock = styled.div`
    display: flex;
    background-color: #ffbdbddd;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    margin: 6px 12px 6px 12px;
`;

const FriendItem = ({ name, image }) => {
    return (
        <FriendItemBlock>
            <div className='friend-image'>{image}</div>
            
            <div className='friend-name'>{name}</div>
        </FriendItemBlock>
    )
}

const FriendList = () => {
    const friends = [
        {id: 1, name: "Kim", img: "IMG"},
        {id: 2, name: "Aim", img: "IMG"},
        {id: 3, name: "Bim", img: "IMG"},
        {id: 4, name: "Cim", img: "IMG"},
        {id: 5, name: "Dim", img: "IMG"},
        {id: 6, name: "Eim", img: "IMG"},
        {id: 7, name: "Fim", img: "IMG"},
    ]

    const renderedFriends = friends.map(friend => {
        return (
            <FriendItem
                key={friend.id}
                name={friend.name}
                image={friend.img}
            />
        )
    })

    return (
        <FriendListBlock>
            {renderedFriends}
        </FriendListBlock>
    )
}

export default FriendList
