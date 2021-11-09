import React, { useState, useRef, useEffect } from 'react';
import { Row, Col, Form as BForm } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';
import Button from '../UI/Button/Button';
import SubTitle from '../UI/Heading/SubTitle';
import './Form.scss';
import { Link } from 'react-router-dom';
import Image from '../UI/Image/Image';
import Aos from 'aos';
import Modal from '../Modal/Modal';
import Anchor from '../UI/Anchor/Anchor';
const Form = (props) => {
  // state

  const [firstName, setFirstName] = useState('');
  const [lastName, setLasttName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [validated, setValidated] = useState(false);
  const [isMailValid, setIsMailValid] = useState(false);
  const [error, setError] = useState('');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let formRef = useRef();

  useEffect(() => {
    if (props.mailData) {
      setTimeout(() => handleClose(false), 3000);
    } else {
      handleClose(false);
    }
  }, [props.mailData]);

  useEffect(() => {
    Aos.init();
  }, []);

  // form handle
  const checkMail = (e) => {
    setEmailAddress('test@test.com');
    if (
      e.target.value.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      setIsMailValid(true);
    } else {
      setIsMailValid(false);
    }
  };
  const checkMessage = (e) => {
    setMessage(e.target.value);
    if (e.target.value.lenght < 1) {
      setError('message field is required');
    }
  };
  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
    e.preventDefault();
    setShow(true);
    props.submitContactForm({
      firstName: firstName,
      lastName: lastName,
      email: emailAddress,
      subject: subject,
      message: message,
    });
    setFirstName('');
    setLasttName('');
    setEmailAddress('');
    setSubject('');
    setMessage('');
    setValidated(false);
  };

  return (
    <div className='form-component-wrapper'>
      <Row className='justify-content-center justify-content-lg-auto'>
        <Col
          lg='5'
          md='12'
          xs='12'
          sm='12'
          className='text-sm-center text-lg-left'>
          <div className='form-component-title h-100 d-flex justify-content-around align-items-left  flex-column'>
            <SubTitle>{props.formTitle}</SubTitle>
            {props.contactFlow ? (
              <div
                className='form_contact_image_wrapper d-flex'
                data-aos='fade-up'
                data-aos-duration='3000'>
                {props.contactFlow.map((item, index) => {
                  return (
                    <div className=''>
                      <Anchor link={item.link} key={index} target='_blank'>
                        <Image imgLink={item.socialLogo} />
                      </Anchor>
                    </div>
                  );
                })}
              </div>
            ) : (
              ''
            )}
          </div>
        </Col>
        <BForm
          noValidate
          validated={validated}
          onSubmit={(e) => handleSubmit(e)}
          className='contact-form'
          ref={formRef}>
          <Col xs='12' className='w-100' lg='12' md='12'>
            <Row>
              <Col lg='6' xs='12' sm='12' md='12'>
                <BForm.Group>
                  <BForm.Control
                    name='Fname'
                    value={firstName}
                    type='text'
                    placeholder='First Name'
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                    required
                    setFirstName
                  />
                  <BForm.Control.Feedback type='invalid'>
                    {firstName.length < 1 ? 'first name is required' : ''}
                  </BForm.Control.Feedback>
                </BForm.Group>
              </Col>
              <Col xs='12' sm='12' lg='6' md='12'>
                <BForm.Group>
                  <BForm.Control
                    name='Lname'
                    value={lastName}
                    type='text'
                    placeholder='Last Name'
                    onChange={(e) => {
                      setLasttName(e.target.value);
                    }}
                    required
                  />
                  <BForm.Control.Feedback type='invalid'>
                    {lastName.length < 1 ? 'Last name is required' : ''}
                  </BForm.Control.Feedback>
                </BForm.Group>
              </Col>
            </Row>
            <Row>
              <Col xs='12' sm='12' md='12' lg='6'>
                <BForm.Group>
                  <BForm.Control
                    name='email'
                    value={emailAddress}
                    type='email'
                    required
                    placeholder='Email'
                    onChange={(e) => checkMail(e)}
                  />
                  <BForm.Control.Feedback type='invalid'>
                    {emailAddress.length < 1
                      ? 'email  is required'
                      : emailAddress.match(
                          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                        )
                      ? ''
                      : 'email address is not valid'}
                  </BForm.Control.Feedback>
                </BForm.Group>
              </Col>
              <Col xs='12' sm='12' md='12' lg='6'>
                <BForm.Group>
                  <BForm.Control
                    name='subject'
                    value={subject}
                    type='text'
                    required
                    placeholder='Subject'
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                  />
                  <BForm.Control.Feedback type='invalid'>
                    {subject.length < 1 ? 'subject  is required' : ''}
                  </BForm.Control.Feedback>
                </BForm.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <BForm.Group>
                  <BForm.Control
                    value={message}
                    as='textarea'
                    placeholder='message'
                    name='message'
                    className='form-control'
                    required
                    onChange={(e) => checkMessage(e)}></BForm.Control>
                  <BForm.Control.Feedback type='invalid'>
                    {message.length < 1 ? 'message   is required' : ''}
                  </BForm.Control.Feedback>
                </BForm.Group>
                <Row>
                  <Col md={3}>
                    <div className='form-submit-button-wrapper'>
                      <Button
                        btnType='submit'
                        disabled={
                          firstName < 1 ||
                          lastName < 1 ||
                          emailAddress < 1 ||
                          !isMailValid ||
                          subject < 1 ||
                          message < 1
                            ? true
                            : false
                        }>
                        SEND
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </BForm>
      </Row>
      <Modal handleShow={show} handleClose={() => setShow(false)} />
    </div>
  );
};

export default Form;
