import React, { useRef } from 'react'
import './SingleWork.scss'
import Image from '../UI/Image/Image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { Spinner, Col, Row } from 'react-bootstrap'
import leftArrow from '../../assets/img/testimonial/arrow-left1.svg'
import rightArrow from '../../assets/img/testimonial/arrow-left.svg'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import Heading from '../UI/Heading/Heading'
import Border from '../UI/Border/Border'

const SingleWork = (props) => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 5000,
    draggable: false,
    swipeToSlide: false,
    touchMove: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          draggable: true,
          swipeToSlide: true,
          touchMove: true,
        },
      },
    ],
  }
  const sliderRef = useRef()
  const gotoNext = () => {
    sliderRef.current.slickNext()
  }
  const gotoPrev = () => {
    sliderRef.current.slickPrev()
  }
  let SingleWorkBlock = <Spinner animation='border' />

  if (props.singelWorkData) {
    SingleWorkBlock = (
      <>
        <Row>
          <Col md='12'>
            <Heading heading='Some of our works' />
          </Col>
          <Col md='7' lg='7' xs='8' sm='7'>
            <Border />
          </Col>
        </Row>
        <div className='some-of-our-works-section-wrapper position-relative'>
          <div className='single-work-wrapper position-relative'>
            <Slider {...settings} ref={sliderRef}>
              {props.singelWorkData.data.map((item, index) => {
                var view = ''
                if (index % 2 === 0) {
                  view = (
                    <>
                      <Col lg='8' md='6' xs='6' sm='6'>
                        <Link to={`/work-details/${item.id}`}>
                          <div className='single-work-image-wrapper'>
                            <Image
                              imgLink={item.home_image}
                              imgAlt={'work image'}
                            />
                          </div>
                        </Link>
                      </Col>
                      <Col lg='4' md='6' xs='6' sm='6'>
                        <Link to={`/work-details/${item.id}`}>
                          <div className='single-work-content-content-wrapper d-flex h-100 justify-content-center  flex-column'>
                            <div className='single-work-title-wrapper  mb-3'>
                              <h2>{item.name}</h2>
                            </div>
                            <div className='single-work-content-sub-title'>
                              <p>{item.description}</p>
                              <div className='single-work-arrow-icon'>
                                <Link to={`/work-details/${item.id}`}>
                                  <BsArrowRight />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </Col>
                    </>
                  )
                } else {
                  view = (
                    <>
                      <Col lg='4' md='6' xs='6' sm='6'>
                        <Link to={`/work-details/${item.id}`}>
                          <div className='single-work-content-content-wrapper d-flex h-100 justify-content-center  flex-column'>
                            <div className='single-work-title-wrapper  mb-3'>
                              <h2>{item.name}</h2>
                            </div>
                            <div className='single-work-content-sub-title'>
                              <p>{item.description}</p>
                              <div className='single-work-arrow-icon'>
                                <Link to={`/work-details/${item.id}`}>
                                  <BsArrowRight />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </Col>
                      <Col lg='8' md='6' xs='6' sm='6'>
                        <Link to={`/work-details/${item.id}`}>
                          <div className='single-work-image-wrapper'>
                            <Image
                              imgLink={item.home_image}
                              imgAlt={'work image'}
                            />
                          </div>
                        </Link>
                      </Col>
                    </>
                  )
                }

                return (
                  <div key={index} className='single-work-content-wrapper'>
                    <Row>{view}</Row>
                  </div>
                )
              })}
            </Slider>
            <Col>
              <div className='d-none d-lg-flex justify-content-end'>
                <div
                  className='slider-control slider-control-left mr-2'
                  onClick={gotoNext}>
                  <Image imgLink={leftArrow} imgAlt='arrow' />
                </div>
                <div
                  className='slider-control  slider-control-right'
                  onClick={gotoPrev}>
                  <Image imgLink={rightArrow} imgAlt='arrow' />
                </div>
              </div>
            </Col>
          </div>
        </div>
      </>
    )
  }
  return <>{SingleWorkBlock}</>
}

export default SingleWork
