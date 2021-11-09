import React from "react";

const SingleTestimonial = (props) => {
  return (
    <div className="single-testimonial-wrapper position-relative">
      <div className="single-testimonial-content">
        <p>{props.message}</p>
      </div>
      <div className="single-testimonial-author-details mt-3">
        <p className="font-weight-bold">{props.authorName}</p>
        <p className="font-weight-light">{props.authorCountry}</p>
      </div>
    </div>
  );
};

export default SingleTestimonial;
