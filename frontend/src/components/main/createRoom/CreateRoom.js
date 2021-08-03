import React from 'react'
import { Container, Form, Button, FloatingLabel } from 'react-bootstrap';
import styled from 'styled-components'
import FriendListContainer from '../../../containers/main/FriendListContainer';

const CreateRoomBlock = styled.div`
    margin-top: 3rem;
    width: 60%;
    .container {
        display: flex;
        height: 90%
    }
`;

const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;

    .form-title {
        margin-top: 1rem;
    }
    .form-desc {
    }

    .btn {
        align-self: flex-end;
    }
`;

const CreateRoomForm = ({ onChangeField, title, body }) => {

    const onChangeTitle = e => {
        onChangeField({ key: 'title', value: e.target.value })
    };
    const onChangeBody = e => {
        onChangeField({ key: 'body', value: e.target.value })
    };

    return (
        <StyledForm>

            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label> 대화상대를 지정해 채팅방의 정보를 설정하세요 </Form.Label>
                <FloatingLabel
                    controlId="floatingTextarea1"
                    label="채팅방 이름"
                    className="mb-3"
                >
                    <Form.Control 
                        className="form-title" 
                        onChange={onChangeTitle} 
                        value={title}
                        as="textarea" 
                        type="title" 
                        placeholder="." 
                    />
                </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDesc">
                <FloatingLabel
                    controlId="floatingTextarea2"
                    label="채팅방 설명"
                    className="mb-3"
                >
                    <Form.Control 
                        className="form-desc" 
                        onChange={onChangeBody} 
                        value={body} 
                        as="textarea" 
                        type="desc" 
                        placeholder="." 
                    />
                </FloatingLabel>
            </Form.Group>

            <Button className="btn" variant="outline-primary" type="submit">
                채팅방 생성
            </Button>
        </StyledForm>
    )
}

const CreateRoom = ({ onChangeField, title, body }) => {
    return (
        <CreateRoomBlock>
            <Container className="container">
                    <FriendListContainer className="cr-friendList" />
                    <CreateRoomForm onChangeField={onChangeField} title={title} body={body} />
            </Container>
        </CreateRoomBlock>
    )
}

export default CreateRoom
