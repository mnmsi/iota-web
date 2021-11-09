import React from "react";
import Image from "../UI/Image/Image";

const SingleManagement = (props) => {
  return (
    <div className="single-management-card">
      <div className="single-management-image-wrapper">
        <Image imgLink={props.image} imgAlt={"management"} />
      </div>
      <div className="single-management-details mt-3 mb-1">
        <p className="font-weight-bold">{props.name}</p>
        <p>{props.position}</p>
      </div>
    </div>
  );
};

export default SingleManagement;
