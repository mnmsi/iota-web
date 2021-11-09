import React, { useState, useEffect, useRef } from 'react';
import './Career.scss';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import CarrerBanner from '../../../components/CareerBanner/CarrerBanner';
import BannerGif from '../../../assets/img/career/Group 705.png';
import Input from '../../../components/UI/Input/Input';
import Select from '../../../components/UI/Select/Select';
import Button from '../../../components/UI/Button/Button';
import Border from '../../../components/UI/Border/Border';
import Heading from '../../../components/UI/Heading/Heading';
import AccordionComponent from '../../../components/AccordionComponents/AccordionComponent';
import Aos from 'aos';
import * as Actions from '../../../Redux/Actions/';
import { connect } from 'react-redux';
import Modal from '../../../components/Modal/Modal';

const Career = (props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    Aos.init();
    props.accordionData();
  }, []);

  const [error, setError] = useState(false);
  const [textInput, setTextInput] = useState({
    Fname: '',
    Lname: '',
    Email: '',
    Position: '',
    Details: '',
    file: '',
  });

  const selectValue = [
    { value: '', label: 'Position' },
    { value: 'UI & UX Designer', label: 'UI & UX Designer' },
    { value: 'Web Developer', label: 'Web Developer' },
    {
      value: 'Mobile Application Developer',
      label: 'Mobile Application Developer',
    },
  ];

  const bannerData = {
    image: BannerGif,
    heading: 'Join Team IOTA!',
    content: 'Apply for a job in our company and enjoy working with us',
  };

  let form = useRef();
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (
      textInput.Fname.length < 1 ||
      textInput.Lname < 1 ||
      textInput.Email.length < 1 ||
      textInput.Position.length < 1
    ) {
      setError(true);
    } else {
      setShow(true);
      e.target.reset();
      props.sendMail(textInput);
    }
  };

  let handleOnChange = (e) => {
    let name = e.target.name;
    if (name === 'file') {
      textInput[name] = e.target.files[0];
    } else {
      textInput[name] = e.target.value;
    }

    setTextInput(textInput);
  };
  let accordionBlock = props.careerLoading && <Spinner animation='border' />;
  if (props.careerPageData) {
    accordionBlock = (
      <AccordionComponent accordionData={props.careerPageData} />
    );
  }
  return (
    <div className='careerPage-wrapper'>
      <Container>
        {/* banner */}
        <div className='carrer-banner'>
          <CarrerBanner
            image={bannerData.image}
            content={bannerData.content}
            heading={bannerData.heading}
          />
        </div>
        {/* career content */}
        <div className='career-page-main-content pt-10 section-devider'>
          <Row>
            <Col md={5} className='mb-lg-0 mb-md-0'>
              {/* accordion */}
              <Heading heading='JOB OPPORTUNITY' textLeft={true} />
              <Border isReverse={true} />
              <div
                className='career-accordion'
                data-aos='fade-up'
                data-aos-duration='1000'>
                {accordionBlock}
              </div>
            </Col>
            <Col md={7}>
              {/* form title */}
              <Heading heading='APPLY FOR A JOB' textLeft={true} />
              <Border isReverse={true} />
              {/* form */}
              <div
                className='career-join-us-form'
                data-aos='fade-left'
                data-aos-duration='1000'>
                <form onSubmit={formSubmitHandler} ref={form}>
                  <Input
                    inputType='text'
                    inputClassName='career-from'
                    inputName='Fname'
                    inputPlaceHolder='First Name'
                    inputOnChange={(e) => handleOnChange(e)}
                    required={true}
                  />
                  {error && (
                    <p className='text-danger'>
                      {textInput.Fname.length < 1
                        ? 'This field is required'
                        : ''}
                    </p>
                  )}
                  <Input
                    inputType='text'
                    inputClassName='career-from'
                    inputName='Lname'
                    inputPlaceHolder='Last Name'
                    inputOnChange={(e) => handleOnChange(e)}
                    required={true}
                  />
                  {error && (
                    <p className='text-danger'>
                      {textInput.Lname.length < 1
                        ? 'This field is required'
                        : ''}
                    </p>
                  )}
                  <Input
                    inputType='email'
                    inputClassName='career-from'
                    inputName='Email'
                    inputPlaceHolder='Email'
                    inputOnChange={(e) => handleOnChange(e)}
                    required={true}
                  />
                  {error && (
                    <p className='text-danger'>
                      <p className='text-danger'>
                        {textInput.Email.length < 1
                          ? 'This field is required'
                          : textInput.Email.match(
                              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                            )
                          ? 'email is not vaild'
                          : ''}
                      </p>
                    </p>
                  )}
                  <Select
                    options={selectValue}
                    inputName='Position'
                    selectDefaultVal='Position'
                    SelectClassName='carrer-drop-down'
                    inputOnChange={(e) => handleOnChange(e)}
                    required={true}
                  />
                  {error && (
                    <p className='text-danger'>
                      {textInput.Position.length < 1
                        ? 'This field is required'
                        : ''}
                    </p>
                  )}
                  <Input
                    inputClassName='career-from'
                    inputType='textarea'
                    inputPlaceHolder='Details'
                    inputName='Details'
                    inputOnChange={(e) => handleOnChange(e)}
                    required={true}
                    inputRows='5'
                  />
                  {error && (
                    <p className='text-danger'>
                      {textInput.Details.length < 1
                        ? 'This field is required'
                        : ''}
                    </p>
                  )}
                  <div className='career-page-file-upload d-lg-flex d-md-block justify-content-between align-items-center'>
                    <div className='upload-btn-wrapper'>
                      <Button btnType='button' btnClasses='fileUpload btn'>
                        ADD CV
                      </Button>
                      <Input
                        inputClassName='career-from'
                        inputType='file'
                        inputName='file'
                        inputOnChange={(e) => handleOnChange(e)}
                        fileAccept='.doc,.docx,.ppt,.pptx,.pdf'
                        required={true}
                      />
                    </div>
                    <div className='career-form-button-wrapper i-button '>
                      <Button
                        btnType='submit'
                        disabled={
                          textInput.Fname.length < 1 ||
                          textInput.Lname < 1 ||
                          textInput.Email.length < 1 ||
                          textInput.Position.length < 1
                            ? true
                            : false
                        }>
                        Submit
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </div>
        <Modal handleShow={show} handleClose={() => setShow(false)} />
      </Container>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    mailerLoading: state.mailerReducer.loading,
    mailData: state.mailerReducer.data,
    careerPageData: state.careerReducer.data,
    careerLoading: state.careerReducer.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendMail: (data) => dispatch(Actions.sendCareerMail(data)),
    accordionData: () => dispatch(Actions.careerData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Career);
