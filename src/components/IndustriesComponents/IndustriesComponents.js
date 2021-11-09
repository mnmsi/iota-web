import React from "react";
import Image from "../UI/Image/Image";
import "./IndustriesComponents.scss";
const IndustriesComponents = (props) => {
  return (
    <div className="industriesComponents-wrapper">
      <div className="logo">
        <Image imgLink={props.image} />
      </div>
      <div className="title">{props.name}</div>
    </div>
  );
};

export default IndustriesComponents;
