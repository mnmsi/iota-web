import React from "react";
import SubTitle from "./SubTitle";
import "./Heading.scss";

const Heading = (props) => {
  return (
    <>
      <div
        className={`main-heading {
            ${
              props.textLeft
                ? " text-left"
                : props.textRight
                ? "text-right"
                : "text-center"
            }`}
      >
        <SubTitle>{props.heading}</SubTitle>
      </div>
    </>
  );
};

export default Heading;
