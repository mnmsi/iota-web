import React from 'react';
import './Counter.scss';
import CountUp from 'react-countup';
import { Spinner, Row, Col, Container } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
const Counter = (props) => {
  const [ref, inView] = useInView({
    threshold: 0,
  });
  let countUp = '';
  if (inView === true) {
    countUp = (
      <div className='count'>
        <Row className='text-center'>
          {/* {props.counterData.map((item, index) => {
            return (
              <Col md='6' lg='3' xs='6' sm='6' key={index} className='mb-2'>
                <div className='count-number'>
                  <h2>
                    <CountUp end={parseInt(item.count)} duration={7}></CountUp>
                  </h2>
                </div>
                <div className='count-text mt-1'>
                  <p>{item.title}</p>
                </div>
              </Col>
            );
          })} */}
          <Col md='6' lg='3' xs='6' sm='6' className='mb-2'>
            <div className='count-number'>
              <h2>
                <CountUp
                  end={parseInt(props.counterData[0]?.project_complete)}
                  duration={7}></CountUp>
              </h2>
            </div>
            <div className='count-text mt-1'>
              <p>project completed</p>
            </div>
          </Col>
          <Col md='6' lg='3' xs='6' sm='6' className='mb-2'>
            <div className='count-number'>
              <h2>
                <CountUp
                  end={parseInt(props.counterData[0]?.team_members)}
                  duration={7}></CountUp>
              </h2>
            </div>
            <div className='count-text mt-1'>
              <p>TEAM MEMBERS</p>
            </div>
          </Col>
          <Col md='6' lg='3' xs='6' sm='6' className='mb-2'>
            <div className='count-number'>
              <h2>
                <CountUp
                  end={parseInt(props.counterData[0]?.experience)}
                  duration={7}></CountUp>
              </h2>
            </div>
            <div className='count-text mt-1'>
              <p>YEARS OF EXPERIENCE</p>
            </div>
          </Col>
          <Col md='6' lg='3' xs='6' sm='6' className='mb-2'>
            <div className='count-number'>
              <h2>
                <CountUp
                  end={parseInt(props.counterData[0]?.country_served)}
                  duration={7}></CountUp>
              </h2>
            </div>
            <div className='count-text mt-1'>
              <p>COUNTRY SERVED</p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
  let CounterBlock = <Spinner animation='grow' />;
  if (props.counterData) {
    CounterBlock = (
      <>
        <div className='counter-section-wrapper' ref={ref} inview={inView}>
          <Container>
            <Row className='text-center'>
              <div className='col-md-12'>
                <div className='top-counter-title mb-1'>
                  <h5>
                    IOTA Infotech don't provide estimate of cost but the roadmap
                    of savings and safety
                  </h5>
                </div>
                <div className=' count-section-heading'>
                  <h4>
                    IOTA is just not an Agency,
                    <strong>
                      We are your in house team and our mission is to fulfilment
                      of your requirements
                    </strong>
                    just like your partner.
                  </h4>
                </div>
              </div>
            </Row>
            {countUp}
          </Container>
        </div>
      </>
    );
  }
  return <>{CounterBlock}</>;
};

export default Counter;
