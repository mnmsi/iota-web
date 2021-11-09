import React, { useEffect } from 'react';
import './CarrerBanner.scss';
import { Spinner } from 'react-bootstrap';
import Image from '../UI/Image/Image';
import Aos from 'aos';
const CarrerBanner = (props) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className='career-banner-wrapper position-relative section-devider'>
        <div className='banner-block-image'>
          <Image imgLink={props.image} />
        </div>
        <div
          className='banner-block-content text-right'
          data-aos='fade-left'
          data-aos-delay='100'
          data-aos-duration='1000'>
          <div className='banner-headingn '>
            <h2>{props.heading}</h2>
          </div>
          <div className='banner-content'>
            <p>{props.content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarrerBanner;
