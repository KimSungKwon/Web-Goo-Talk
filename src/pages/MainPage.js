import React from 'react'
import { Container } from 'react-bootstrap'
import Layout from '../components/layouts/Layout'
import InformationContainer from '../containers/main/InformationContainer'
import Lobby from '../components/main/Lobby'
import { useSelector } from 'react-redux'

const MainPage = () => {
    const { user } = useSelector(({ user }) => ({
        user: user.user
    }));

    return (
        <Layout>
            <Container style={{ minHeight: "75vh" }}>
                {user!==null ?
                    (<Lobby />)
                    :
                    (<InformationContainer />)
                }
            </Container>
        </Layout>
    )
}

export default MainPage
