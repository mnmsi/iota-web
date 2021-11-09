import React, { useState } from 'react';
import { Card, Button, Accordion, Spinner } from 'react-bootstrap';
import { BiMinus, BiPlus } from 'react-icons/bi';
import './AccordionComponents.scss';

const AccordionComponent = (props) => {
  // event
  const [activeId, setActiveId] = useState(1);
  const [isShow, setIsShow] = useState(1);

  function toggleActive(id) {
    setIsShow(0);
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  }

  let accordionClass = '';
  let accordionId = document.getElementById('accordionShow');
  if (accordionId) {
    accordionClass = accordionId.classList.contains('show');
  }
  let accordionBlock = <Spinner animation='border' />;
  if (props.accordionData != null) {
    accordionBlock = (
      <div className={`${'border-c'}`}>
        <Accordion>
          {props.accordionData.map((item, index) => {
            let id = index + 1;

            return (
              <Card
                className={`  ${
                  activeId === id
                    ? 'accordion-acitve-class'
                    : 'accordion-wrapper'
                }`}
                key={id}>
                <Card.Header>
                  <div className='accordion-header-wrapper d-flex justify-content-between align-items-center'>
                    <div className='accordion-heading'>
                      <h2>{item.heading}</h2>
                    </div>
                    <div className='accordion-toggle'>
                      <Accordion.Toggle
                        as={Button}
                        variant='button'
                        eventKey={id}
                        onClick={() => toggleActive(id)}
                        className='show'>
                        {activeId === id ? <BiMinus /> : <BiPlus />}
                      </Accordion.Toggle>
                    </div>
                  </div>
                </Card.Header>
                <Accordion.Collapse
                  eventKey={id}
                  className={`${isShow === id ? 'show' : ''}`}
                  id='accordionShow'>
                  <Card.Body>
                    <p>{item.content}</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            );
          })}
        </Accordion>
      </div>
    );
  }
  return <>{accordionBlock}</>;
};

export default AccordionComponent;
