import React from 'react'
import ImageSlider from '../common/ImageSlider'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'

const InformationBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;

    .info_welcom {
        padding-top: 24px;
        padding-bottom: 24px;
        font-size: 48px

    }

    .info_Btn {
        margin-top: 48px;
        margin-bottom: 48px;
    }
`;

const Information = () => {
    return (
        <InformationBlock>
            <div className="info_welcom">Get Started</div>
            <ImageSlider />
            <Button variant="outline-primary" className="info_Btn">지금 시작하기</Button>
        </InformationBlock>
    )
}

export default Information
