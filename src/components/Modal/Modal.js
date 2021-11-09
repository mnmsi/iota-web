import React from 'react';
import './Modal.scss';
import Image from '../UI/Image/Image';
import ufo from '../../assets/img/modal/Group 1424.png';
import { Modal as BModal } from 'react-bootstrap';

const Modal = (props) => {
  return (
    <>
      <BModal
        show={props.handleShow}
        onHide={props.handleClose}
        animation={true}
        className='form-modal'
        aria-labelledby='contained-modal-title-vcenter'
        centered>
        <BModal.Body className='contact-form-modal'>
          <div className='modal-image-wrapper'>
            <Image imgLink={ufo} />
          </div>
          <h4>
            Thank you for your message . <br /> it has been seent .
          </h4>
          <button onClick={props.handleClose}>Go Back</button>
        </BModal.Body>
      </BModal>
    </>
  );
};

export default Modal;
