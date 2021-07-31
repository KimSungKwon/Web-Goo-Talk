import React from 'react'
import { useSelector } from 'react-redux'
import Profile from '../../components/main/Profile'

const ProfileContainer = () => {
    const { user } = useSelector(({ user }) => ({
        user: user.user
    }))

    return (
        <Profile user={user} />
    )
}

export default ProfileContainer
