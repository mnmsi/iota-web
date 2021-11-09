import React, { useEffect } from 'react';
import Image from '../UI/Image/Image';
import Aos from 'aos';
import 'aos/dist/aos.css';

const SingleGallery = (props) => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div
      className='single-gallery-wrapper'
      onClick={props.handleClick}
      data-aos='zoom-in'>
      <Image imgLink={props.image} imgAlt='gallery-image' />
    </div>
  );
};

export default SingleGallery;
