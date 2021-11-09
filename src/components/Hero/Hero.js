import React, { useEffect } from "react";
import "./Hero.scss";
import Title from "../UI/Heading/Title";
import IMAGE from "../UI/Image/Image";
import { Container, Row, Col } from "react-bootstrap";
import Aos from "aos";

const Hero = (props) => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div className="hero-section-wrapper">
      <Container>
        <div className="hero-section-content-wrapper d-flex h-100 justify-content-center align-items-center">
          <Row>
            <Col lg="5" md="12" sm="12" xs="12">
              <div
                className="hero-section-title"
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <Title>{props.heroSectionTitle}</Title>
              </div>
            </Col>
            <Col lg="7" sm="12" xs="12" md="12">
              <div
                className="hero-section-image-block"
                data-aos="fade-left"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <IMAGE
                  imgLink={props.heroSectionImage}
                  imgClassess="img-fluid"
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
