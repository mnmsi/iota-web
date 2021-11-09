import React from 'react';
import './Image.scss';

const Image = (props) => {
  const brokenImage = (e) => {};
  return (
    <>
      <img
        alt={props.imgAlt}
        src={props.imgLink}
        className='img-fluid image-loading'
        loading='lazy'
        onError={(e) => brokenImage(e)}
      />
    </>
  );
};

export default Image;
