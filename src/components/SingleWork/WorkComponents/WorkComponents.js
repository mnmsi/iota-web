import React from "react";
import SingleOurWork from "../SingleOurWork/SingleOurWork";
import { Spinner, Row, Col } from "react-bootstrap";
import "./WorkComponents.scss";
const WorkComponents = (props) => {
  let workBlock = <Spinner animation="border" />;
  if (props.workData) {
    workBlock = (
      <Row>
        {props.workData.map((item, index) => {
          return (
            <Col md={6} key={index}>
              <SingleOurWork
                image={item.image}
                tilte={item.title}
                content={item.content}
              />
            </Col>
          );
        })}
      </Row>
    );
  }
  return <>{workBlock}</>;
};

export default WorkComponents;
