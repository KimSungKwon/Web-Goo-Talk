import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'

const StyledContainer = styled(Container)`
`;


const Footer = () => {
    return (
        <footer>
            <StyledContainer>
                <div style={{textAlign: "center"}}>
                    &copy; 2021 KimSungKwon, All Rights Reserved.
                </div>
            </StyledContainer>
        </footer>
    )
}

export default Footer
