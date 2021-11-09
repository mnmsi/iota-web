import React from "react";
import "./Management.scss";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import SingleManagement from "./SingleManagement";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Management = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoPlaySpeed: 3000,
    speed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 468,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let managementBlock = <Spinner animation="border" />;
  if (props.managementData) {
    managementBlock = (
      <div className="management-wrapper p-5">
        <Container>
          <Slider {...settings}>
            {props.managementData.map((item, index) => {
              return (
                <div key={index} className="text-center">
                  <SingleManagement
                    image={item.image}
                    position={item.position}
                    name={item.name}
                  />
                </div>
              );
            })}
          </Slider>
        </Container>
      </div>
    );
  }
  return <>{managementBlock}</>;
};

export default Management;
