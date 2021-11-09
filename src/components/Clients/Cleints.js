import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "./Clients.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftArrow from "../../assets/img/testimonial/arrow-left1.svg";
import rightArrow from "../../assets/img/testimonial/arrow-left.svg";
import Image from "../UI/Image/Image";
import { Container, Row, Col } from "react-bootstrap";
import Border from "../UI/Border/Border";
import Heading from "../UI/Heading/Heading";

const Cleints = (props) => {
  const settings = {
    dots: false,
    infinite: props.clientsData.length > 4,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoPlaySpeed: 1000,
    speed: 1000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          initialSlide: 3,
          dots: false,
          infinite: props.clientsData.length > 6,
        },
      },
    ],
  };
  const sliderRef = useRef();
  const gotoLeft = () => {
    sliderRef.current.slickNext();
  };
  const gotoRight = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <>
      <div className="clients-section-wrapper">
        <Container>
          <Row>
            <Col md="12">
              <Heading heading="Our Clients" />
            </Col>
            <Col md="6">
              <div className="testimonial-slider-control-wrapper d-flex">
                <div
                  className="slider-control slider-control-left mr-2"
                  onClick={gotoLeft}
                >
                  <Image imgLink={leftArrow} imgAlt="arrow" />
                </div>
                <div
                  className="slider-control  slider-control-right"
                  onClick={gotoRight}
                >
                  <Image imgLink={rightArrow} imgAlt="arrow" />
                </div>
              </div>
            </Col>
            <Col
              md={{ span: 7, offset: 5 }}
              sm={{ span: 7, offset: 4 }}
              xs={{ span: 8, offset: 4 }}
            >
              <Border isReverse={true} />
            </Col>
          </Row>
          <Slider {...settings} ref={sliderRef}>
            {props.clientsData.map((item, index) => {
              return (
                <div className="n_single_clients_content_wrapper" key={index}>
                  <div className="clients_logo_wrapper">
                    <Image imgLink={item.logo} />
                  </div>
                  <div className="clients_footer">
                    <p>{item.clientsName}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </Container>
      </div>
    </>
  );
};

export default Cleints;
