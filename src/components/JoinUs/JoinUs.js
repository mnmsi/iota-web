import React from 'react';
import './JoinUs.scss';
import Title from '../UI/Heading/Title';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const JoinUs = (props) => {
  return (
    <div className='joinUs-section-wrapper'>
      <Container>
        <div className='joinus-content-wrapper'>
          <Row>
            <Col lg={8} md='12' sm='12' xs='12'>
              <div className='joinUs-content'>
                <div className='joinUs-content-heading'>
                  <Title>{props.title}</Title>
                </div>
                <div className='joinUs-content-content'>
                  <p>{props.content}</p>
                </div>
              </div>
            </Col>
            <Col lg={4} md='12' sm='12' xs='12'>
              <div className='join-us-button-link-wrapper'>
                <Link to='/work-process'>Work Process</Link>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default JoinUs;
