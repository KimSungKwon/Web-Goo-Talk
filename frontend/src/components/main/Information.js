import React, { useState, useEffect } from 'react'
import ImageSlider from '../common/ImageSlider'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import Modals from '../common/Modals';

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

const Information = ({ user }) => {
    const [ModalOn, setModalOn] = useState(false)
    
    const onHide = () => setModalOn(false);

    useEffect(() =>{
        console.log("Modal off");
        setModalOn(false);
    }, [user]);

    return (
        <>
            <Modals 
                show={ModalOn} 
                onHide={onHide} 
            />
            <InformationBlock>
                <div className="info_welcom">Get Started</div>
                <ImageSlider />
                <Button 
                    size="lg"
                    variant="outline-primary" 
                    className="info_Btn"
                    onClick={() => setModalOn(true)}
                >
                    지금 시작하기
                </Button>
            </InformationBlock>
        </>
    )
}

export default Information
