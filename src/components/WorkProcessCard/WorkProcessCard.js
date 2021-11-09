import React from 'react';
import './WorkProcessCard.scss';
import Image from '../UI/Image/Image';
import { Spinner } from 'react-bootstrap';
const WorkProcessCard = (props) => {
  let dataBlock = <Spinner animation='border' />;
  if (props.data != null) {
    dataBlock = props.data.map((item, index) => {
      let view = '';
      if (index % 2 == 0) {
        view = (
          <div key={index}>
            <div className='work_process_card_container'>
              <div className='work_process_content_wrapper row justify-content-between align-items-center'>
                <div className='col-md-12 col-lg-7'>
                  <div className='work_process_content '>
                    <h4>{item.title}</h4>
                    <p>{item.content}</p>
                    <ul>
                      {item.listItem?.map((item, index) => {
                        return (
                          <li key={index}>
                            <span>{item.item}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className={`work-process-image`}>
                  <Image imgLink={item.image} imgAlt='image' />
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        view = (
          <div key={index}>
            <div className='work_process_card_container'>
              <div className='work_process_content_wrapper row justify-content-between align-items-center flex-row-reverse '>
                <div className='col-md-12 col-lg-7'>
                  <div className='work_process_content '>
                    <h4>{item.title}</h4>
                    <p>{item.content}</p>
                    <ul>
                      {item.listItem?.map((item, index) => {
                        return (
                          <li key={index}>
                            <span>{item.item}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className='work-process-image  reverse-image'>
                  <Image imgLink={item.image} imgAlt='image' />
                </div>
              </div>
            </div>
          </div>
        );
      }
      return view;
    });
  }
  return <div className='work_process_card_wrapper'>{dataBlock}</div>;
};

export default WorkProcessCard;
