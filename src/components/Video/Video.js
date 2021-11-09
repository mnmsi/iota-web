import React, { useState, useRef } from 'react'
import { Spinner, Modal, Row, Col } from 'react-bootstrap'
import SingleVideo from './SingleVideo'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Video.scss'
import leftArrow from '../../assets/img/testimonial/arrow-left1.svg'
import rightArrow from '../../assets/img/testimonial/arrow-left.svg'
import Border from '../UI/Border/Border'
import Image from '../UI/Image/Image'
import ReactPlayer from 'react-player'

const Video = (props) => {
  const sliderControl = useRef()
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    draggable: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  }

  const videoSource = useRef()
  const [videoLink, setVideoLink] = useState('')
  const [isShow, setIsshow] = useState(false)

  const handleClose = () => {
    setIsshow(false)
  }
  const openVideo = (url) => {
    setVideoLink(url)
    setIsshow(true)
  }
  const gotoLeft = () => {
    sliderControl.current.slickNext()
  }
  const gotoRight = () => {
    sliderControl.current.slickPrev()
  }
  let videoBlock = <Spinner animation='grow' />
  if (props.videos) {
    videoBlock = (
      <div className='video-slides-wrapper'>
        <Row>
          <Col lg='5' xl='5' md='12' sm='12' xs='12'>
            <div className='video-section-heading-wrapper pb-10'>
              <Row className='align-items-center'>
                <Col lg='8' sm='7' xs='7' md='7'>
                  <div className='video-section-border-wrapper'>
                    <Border isMargin={true} />
                  </div>
                </Col>
                <Col lg='4' md='12' sm='12' xs='12' className='text-center'>
                  <div className='video-section-title'>
                    <h2 className='font-weight-bold'>Video's</h2>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg='7' md='7'>
            <div className='video-components-slider-controler d-flex justify-content-end'>
              <div
                className='slider-control slider-control-left mr-2'
                onClick={gotoLeft}>
                <Image imgLink={leftArrow} imgAlt='arrow' />
              </div>
              <div
                className='slider-control  slider-control-right'
                onClick={gotoRight}>
                <Image imgLink={rightArrow} imgAlt='arrow' />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg='3' md='12' sm='12' xs='12'>
            <div className='video-content-wrapper h-100 d-flex justify-content-center align-items-center'>
              <h4 className='font-weight-bold'>{props.content}</h4>
            </div>
          </Col>
          <Col lg='9' md='12' sm='12' xs='12'>
            <Slider {...settings} ref={sliderControl}>
              {props.videos.map((item, index) => {
                return (
                  <div key={index}>
                    <SingleVideo
                      thumbnail={item.thumbnail}
                      OpenVideoHandler={() => openVideo(item.videoLink)}
                    />
                  </div>
                )
              })}
            </Slider>
          </Col>
        </Row>
        <Modal
          show={isShow}
          onHide={handleClose}
          className='gallery-modal-wrapper video-modal'
          aria-labelledby='contained-modal-title-vcenter'
          centered>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div className='full-screen-video'>
              <ReactPlayer
                className='react-player'
                url={videoLink}
                controls={true}
                playing={true}
              />
            </div>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
  return <>{videoBlock}</>
}

export default Video
