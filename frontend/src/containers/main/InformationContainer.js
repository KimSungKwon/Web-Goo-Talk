import React from 'react'
import { useSelector } from 'react-redux'
import Information from '../../components/main/Information'

const InformationContainer = () => {
    const { user } = useSelector(({ user }) => ({
        user: user.user
    }))
    
    return (
        <Information user={user} />
    )
}

export default InformationContainer
