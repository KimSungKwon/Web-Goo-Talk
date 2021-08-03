import React, { useState } from 'react'
import { Modal, Container } from 'react-bootstrap'
import GoogleLoginBtnContainer from '../../containers/common/GoogleLoginBtnContainer'



const Modals = ({show, onHide}) => {

    return (
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="modal-90w"
      >
        <Container>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              로그인
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>구글아이디로 로그인</h4>
            <p>
            Ipsum molestiae natus adipisci modi eligendi?   
            </p>
            <GoogleLoginBtnContainer onClick={onHide} />
          </Modal.Body>
        </Container>
      </Modal>
    )
}

export default Modals
