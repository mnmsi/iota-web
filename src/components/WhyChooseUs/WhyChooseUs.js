import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from '../UI/Image/Image';
import './WhyChooseUs.scss';
const WhyChooseUs = (props) => {
  return (
    <div className='whyChooseUs-wrapper'>
      <Container>
        <Row>
          <Col md={6}>
            <div className='whyChooseUs-round-image-wrapper'>
              <Image imgLink={props.image} imgAlt='why choose us' />
            </div>
          </Col>
          <Col md={6}>
            <div className='whyChooseUs-main-content-wrapper'>
              <div className='whychooseUs-top-content'>
                <p>{props.topContent}</p>
              </div>
              <div className='whyChooseUsItemHeading'>
                <p>{props.listHeading}</p>
              </div>
              <div className='whychooseUsList'>
                <ul>
                  {props.whyChooseUsList.map((item, index) => {
                    return <li key={index}>{item.service}</li>;
                  })}
                </ul>
              </div>
              <div className='whyChooseUs-bottom-content'>
                <p>{props.bottomContent}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
