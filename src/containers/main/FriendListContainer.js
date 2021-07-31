import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FriendList from '../../components/main/createRoom/FriendList'

const FriendListContainer = () => {
    const dispatch = useDispatch();
    

    return (
        
        <FriendList />
    )
}

export default FriendListContainer
