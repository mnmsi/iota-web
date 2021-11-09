import React from 'react';
import Image from '../UI/Image/Image';

const SingleVideo = (props) => {
  return (
    <div className='single-video-wrapper' onClick={props.OpenVideoHandler}>
      <div className='video-thumbnail-wrapper'>
        <Image imgLink={props.thumbnail} />
      </div>
    </div>
  );
};

export default SingleVideo;
