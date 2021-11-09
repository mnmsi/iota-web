import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "../../components/UI/Image/Image";
import "./Mission.scss";

const Mission = (props) => {
  return (
    <div className="mission-block-wrapper">
      <Container>
        <Row
          className={`justify-content-around ${
            props.isReverse ? "flex-row-reverse" : ""
          }`}
        >
          <Col md={6}>
            <div className="mission-image-block">
              <Image imgLink={props.image} imgAlt="image" />
            </div>
          </Col>
          <Col md={6}>
            <div className="mission-content h-100 d-flex justify-content-center align-items-center">
              <p>{props.content}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Mission;
