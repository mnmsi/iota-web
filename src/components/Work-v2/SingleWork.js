import React, { useEffect } from 'react'
import './SingleWork.scss'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import { Spinner, Row, Col } from 'react-bootstrap'
import Aos from 'aos'

const SingleWork = (props) => {
  let singleBlock = <Spinner animation='grow' />
  useEffect(() => {
    Aos.init()
  }, [])

  if (props.projectImage) {
    singleBlock = (
      <Row>
        <Col md='12' data-aos='fade-up'>
          <Link to={props.link} onClick={props.handleClick}>
            <div className='v2-single-work-wrapper'>
              <div
                className='v2-single-work-main-content-wrapper position-relative '
                style={{
                  backgroundImage: `url(${props.projectImage})`,
                }}>
                <div className='v2-work-content d-flex '>
                  <div className='v2-project-title'>{props.projectTitle}</div>
                  <div className='v2-project-redirect-icon'>
                    <BsArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </Col>
      </Row>
    )
  }
  return <>{singleBlock}</>
}

export default SingleWork
