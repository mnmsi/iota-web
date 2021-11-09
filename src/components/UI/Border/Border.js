import React from "react";
import SubTitle from "../Heading/SubTitle";
import "./Border.scss";

const Border = (props) => {
  return (
    <div
      className={`overlayBorder-wrapper ${props.isMargin ? " " : "mb-5"} ${
        props.isReverse && "reverse"
      }`}
    >
      <div className="overlay-border"></div>
    </div>
  );
};

export default Border;
