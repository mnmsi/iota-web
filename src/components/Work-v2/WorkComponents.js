import React from 'react'
import { Row, Col, Spinner } from 'react-bootstrap'
import SingleWork from './SingleWork'
const WorkComponents = (props) => {
  let oddCol = 0,
    evenCol = 0

  let WorkComponentsBlock = <Spinner animation='border' />
  if (props.data != null) {
    if (props.data) {
      WorkComponentsBlock = (
        <div className='v2-WorkComponents-wrapper'>
          <Row className='pr-10 pl-10'>
            {props.data.map((item, index) => {
              var md = 0
              var content = ''
              if (index === 0) {
                content = (
                  <Col key={index} lg={7} md='12'>
                    <SingleWork
                      projectTitle={item.name}
                      projectImage={item.featured_image}
                      link={`work-details/${item.id}`}
                    />
                  </Col>
                )
              } else {
                if (index % 2 === 0) {
                  if (evenCol === 5) {
                    md = 7
                    evenCol = 7
                  } else {
                    md = 5
                    evenCol = 5
                  }
                } else {
                  if (oddCol === 5) {
                    md = 7
                    oddCol = 7
                  } else {
                    md = 5
                    oddCol = 5
                  }
                }

                content = (
                  <Col lg={md} md='12'>
                    <SingleWork
                      projectTitle={item.name}
                      projectImage={item.featured_image}
                      link={`work-details/${item.id}`}
                    />
                  </Col>
                )
              }
              return <>{content}</>
            })}
          </Row>
        </div>
      )
    }
  }
  return <>{WorkComponentsBlock}</>
}

export default WorkComponents
