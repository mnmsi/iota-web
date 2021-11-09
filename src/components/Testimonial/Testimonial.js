import React, { useRef } from 'react';
import { Spinner, Row, Col } from 'react-bootstrap';
// import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import leftArrow from '../../assets/img/testimonial/arrow-left1.svg';
import rightArrow from '../../assets/img/testimonial/arrow-left.svg';
import Slider from 'react-slick';
import Image from '../UI/Image/Image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SingleTestimonial from './SingleTestimonial';
import './Testimonial.scss';
import QuotestIcon from '../../assets/img/testimonial/quote-right.svg';

const Testimonial = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoPlaySpeed: 3000,
    speed: 1000,
  };
  // ref handler
  const sliderRef = useRef();
  const gotoLeft = () => {
    sliderRef.current.slickNext();
  };
  const gotoRight = () => {
    sliderRef.current.slickPrev();
  };
  let testimonialBLock = <Spinner animation='border' />;
  if (props.testimonialData != null) {
    testimonialBLock = (
      <div className='testimonial-wrapper'>
        <div className='testimonial-header-wrapper d-flex justify-content-between m'>
          <div className='testimonial-heading d-flex justify-content-center align-items-center'>
            <div className='heading-border mr-4'></div>
            <h2 className='text-capitalize font-weight-bold text-left '>
              Words from our clients
            </h2>
          </div>
          <div className='testimonial-slider-control-wrapper d-flex'>
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
        </div>
        <div className='testimonial-content '>
          <Row className='justify-content-center'>
            <Col md={6} className='position-relative'>
              {/* <div className="testimonial-quotes-icon-wrapper">
                <Image imgLink={QuotestIcon} imgAlt="quotesIcon" />
              </div> */}
              <Slider {...settings} ref={sliderRef}>
                {props.testimonialData?.data.map((item, index) => {
                  return (
                    <div key={index}>
                      <SingleTestimonial
                        kye={index}
                        message={item.review}
                        authorName={item.client}
                        authorCountry={item.country}
                      />
                    </div>
                  );
                })}
              </Slider>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
  return <>{testimonialBLock}</>;
};

export default Testimonial;
