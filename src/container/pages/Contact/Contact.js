import React, { useEffect } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'
import Formv2 from '../../../components/Form/Formv2'
import Launch from '../../../assets/img/footer/Launch.png'
import Image from '../../../components/UI/Image/Image'
import './Contact.scss'
import Map from '../../../components/Map/Map'
import Aos from 'aos'
import skype from '../../../assets/img/contact-flow/skype.png'
import c from '../../../assets/img/contact-flow/c.png'
import whatsup from '../../../assets/img/contact-flow/whatsup.png'
import { getContact } from '../../../Redux/Actions'
import { connect } from 'react-redux'
import breadCrumbVidoe from '../../../assets/video/workstation.mp4'
import MyMapComponent from '../../../components/Map/Map'
const Contact = (props) => {
  useEffect(() => {
    window.scroll({ top: 0, behavior: 'smooth' })
    Aos.init()
    props.contact()
  }, [])
  const breadCrumbData = {
    video: breadCrumbVidoe,
    title: 'Contact Us',
  }

  let socialBlock = <Spinner animation='border' />
  if (props.contactData != null) {
    socialBlock = (
      <>
        <div
          className='single-social-flow-icon'
          data-aos='fade-up'
          data-aos-duration='2000'>
          <a href={`${props.contactData[0]?.whatsapp}`}>
            <Image imgLink={whatsup} imgAlt={'whatsup'} />
          </a>
        </div>
        <div
          className='single-social-flow-icon'
          data-aos='fade-up'
          data-aos-duration='2000'>
          <a href={`${props.contactData[0]?.skype}`}>
            <Image imgLink={skype} imgAlt={'skype'} />
          </a>
        </div>
        <div
          className='single-social-flow-icon'
          data-aos='fade-up'
          data-aos-duration='2000'>
          <a href={`${props.contactData[0]?.calendly}`}>
            <Image imgLink={c} imgAlt={'calendly'} />
          </a>
        </div>
      </>
    )
  }
  let map = ''
  if (props.contactData != null) {
    map = (
      <Map lat={props.contactData[0]?.lat} lon={props.contactData[0]?.lon} />
    )
  }
  return (
    <div className='contact-page-wrapper'>
      {/* breadcrumb */}
      <Breadcrumb
        video={breadCrumbData.video}
        BreadcrumbTitle={breadCrumbData.title}
      />
      {/* contact */}
      <div
        className='contact-page-form-wrapper position-relative pt-10 pb-10'
        data-aos='fade-up'
        data-aos-duration='1000'>
        <Container>
          <Formv2>
            <div className='contact-form-component'>
              <div className='contact-form-lunch-from-wrapper'>
                <Image imgLink={Launch} />
              </div>
              <div className='form-component-title'>
                <h4>
                  We'd love to hear your requirements and work seamlessly
                  together
                </h4>
              </div>
              <div className='form-icon d-flex align-items-center justify-content-center'>
                {socialBlock}
              </div>
            </div>
          </Formv2>
        </Container>
      </div>
      {/* map */}
      <div
        className='contact-page-map-wrapper section-devider pt-5 mt-5'
        data-aos='fade-right'
        data-aos-duration='1000'>
        <Container>{map}</Container>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    contactLoading: state.ContactReducer.loading,
    contactData: state.ContactReducer.data,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    contact: () => dispatch(getContact()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
