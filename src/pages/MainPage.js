import React from 'react'
import { Container } from 'react-bootstrap'
import Layout from '../components/layouts/Layout'
import Information from '../components/main/Information'

const MainPage = () => {
    return (
        <Layout>
            <Container style={{ minHeight: "75vh" }}>
                <Information />
            </Container>
        </Layout>
    )
}

export default MainPage
