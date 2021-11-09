import React, { useState, useEffect } from 'react';
import { sendProgressMailData, updateMailSuccess } from '../../Redux/Actions';
import { connect } from 'react-redux';
import Modal from '../Modal/Modal';
import { Spinner } from 'react-bootstrap';

const Formv2 = (props) => {
  // get file name
  const [fileName, setFileName] = useState('Choose File');
  const [mailStatus, setMailStatus] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // validation state
  const [nameError, setNameError] = useState('');
  const [mailError, setMailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [countryError, setCountryError] = useState('');
  const [statusFlag, setStatusFlag] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    budget: '',
    file: '',
    country: '',
    nda: '',
  });
  // form functionality
  const handleChange = (e) => {
    if (formData.name.length > 1) {
      setNameError('');
    }
    if (formData.email.length > 1) {
      setMailError('');
    }
    if (formData.phone.length > 1) {
      setPhoneError('');
    }
    if (formData.country.length > 1) {
      setCountryError('');
    }
    let name = e.target.name;
    if (name === 'file') {
      formData[name] = e.target.files[0];
      setFileName(e.target.files[0].name);
    } else {
      formData[name] = e.target.value;
    }
  };
  // phone
  const formSubmitHandler = (e) => {
    e.preventDefault();
    setStatusFlag(true);
    if (
      formData.phone.length >= 9 &&
      formData.name.length > 1 &&
      formData.email.length > 5 &&
      formData.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) &&
      formData.country.length > 1
    ) {
      props.sentData(formData);
    } else {
      setMailStatus(true);
    }
    if (formData.name.length < 1) {
      setNameError('name is required');
    } else {
      setNameError('');
    }
    if (formData.country.length < 1) {
      setCountryError('country is required');
    } else {
      setCountryError('');
    }
    if (formData.phone.length < 1) {
      setPhoneError('Phone number required');
    } else if (formData.phone.length < 9) {
      setPhoneError('Phone number minimum 9 digit ');
    } else {
      setPhoneError('');
    }

    if (formData.email.length < 1) {
      setMailError('email is not valid');
    } else if (
      !formData.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      setMailError('email not valid');
    } else {
      setMailError('');
    }
    setTimeout(() => {
      setMailStatus(false);
    }, 3000);
    e.target.reset();
    setFileName('Choose File');
  };

  useEffect(() => {
    if (props.status != null) {
      if (props.status === 1 && statusFlag === true) {
        setShowModal(true);
      } else if (props.status === 0 && statusFlag === true) {
        setMailStatus(true);
      }
    }
  }, [props.status, statusFlag]);
  // modal
  const handleCloseModal = () => {
    props.updateMailSuccess();
    setShowModal(false);
    setStatusFlag(false);
  };
  return (
    <div className='work_process_form_wrapper'>
      <div className='row'>
        <div className='col-md-12 col-sm-12 col-lg-5'>
          <div className='form-content'>{props.children}</div>
        </div>
        <div className='col-md-12 col-sm-12 col-lg-7'>
          <div className='work_process_form '>
            {mailStatus && (
              <div className='alert alert-danger'>
                Opps something went wrong !
              </div>
            )}
            <form method='POST' onSubmit={(e) => formSubmitHandler(e)}>
              {props.loading && (
                <div className='d-flex align-items-center justify-content-center mb-3'>
                  <Spinner animation='border' />
                </div>
              )}
              {showModal && (
                <Modal
                  handleShow={showModal}
                  handleClose={() => handleCloseModal()}
                />
              )}
              <div className='row'>
                <div className='col-md-6 col-lg-6 col-sm-12'>
                  <input
                    type='text'
                    placeholder='Name'
                    name='name'
                    defaultValue=''
                    required
                    onChange={(e) => handleChange(e)}
                  />
                  {nameError.length > 1 && (
                    <div className='text-red feedback'>{nameError}</div>
                  )}
                </div>
                <div className='col-md-6 col-lg-6 col-sm-12'>
                  <input
                    type='tel'
                    placeholder='Phone'
                    name='phone'
                    defaultValue=''
                    required
                    onChange={(e) => handleChange(e)}
                  />
                  {phoneError.length > 1 && (
                    <div className='text-red feedback '>{phoneError}</div>
                  )}
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6 col-lg-6 col-sm-12'>
                  <input
                    type='email'
                    placeholder='Email'
                    name='email'
                    defaultValue=''
                    required
                    onChange={(e) => handleChange(e)}
                  />
                  {mailError.length > 1 && (
                    <div className='text-red feedback'>{mailError}</div>
                  )}
                </div>
                <div className='col-md-6 col-lg-6 col-sm-12'>
                  <input
                    min={0}
                    type='number'
                    name='budget'
                    placeholder='Budget'
                    defaultValue=''
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6 col-lg-6 col-sm-12'>
                  <input
                    required
                    type='text'
                    placeholder='Country'
                    name='country'
                    defaultValue=''
                    onChange={(e) => handleChange(e)}
                  />
                  {countryError.length > 1 && (
                    <div className='text-red feedback'>{countryError}</div>
                  )}
                </div>
                <div className='col-md-6 col-lg-6 col-sm-12'>
                  <div className='upload-btn-wrapper'>
                    <button className='btn'>{fileName}</button>
                    <input
                      type='file'
                      name='file'
                      onChange={(e) => handleChange(e)}
                      accept='.xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf'
                    />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <textarea
                    onChange={(e) => handleChange(e)}
                    name='message'
                    placeholder='type here ...'
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='work-process-checkbox'>
                    <input
                      type='checkbox'
                      id='inlineCheckbox1'
                      name='nda'
                      defaultValue='Yes'
                      onChange={(e) => handleChange(e)}
                    />
                    <label htmlFor='inlineCheckbox1'>
                      Request NDA for a Confidential Consultation.
                    </label>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <button
                    // onClick={(e) => formSubmitHandler(e)}
                    type='submit'
                    className='formSubmitBtn'>
                    Yes, I want to talk to an expart
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.mailerReducer.loading,
    status: state.mailerReducer.data,
    error: state.mailerReducer.error,
  };
};

const mapDispatchToProps = (dispathc) => {
  return {
    sentData: (data) => dispathc(sendProgressMailData(data)),
    updateMailSuccess: () => dispathc(updateMailSuccess()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Formv2);
