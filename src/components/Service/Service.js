import React, { useRef } from 'react';
import Image from '../../components/UI/Image/Image';
import './Service.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import leftArrow from '../../assets/img/testimonial/arrow-left1.svg';
import rightArrow from '../../assets/img/testimonial/arrow-left.svg';
import { Col } from 'react-bootstrap';
const Service = (props) => {
  const settings = {
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 5000,
    speed: 500,
    dots: false,
    Infinity: true,
    centerMode: true,
  };
  const sliderRef = useRef();
  const gotoNext = () => {
    sliderRef.current.slickNext();
  };
  const gotoPrev = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <div className='n_service_wrapper'>
      <Slider {...settings} ref={sliderRef}>
        {props.data.map((item, index) => {
          return (
            <div className='service_section_content_wrapper' key={index}>
              <div className='n_service_section_heading'>
                <h2>{item.service}</h2>
              </div>
              <div className='n_service_section_content'>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </Slider>
      <Col>
        <div className='d-flex justify-content-center align-items-center mt-4'>
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
  );
};

export default Service;
