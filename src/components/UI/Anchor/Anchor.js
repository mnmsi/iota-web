import React from "react";

const Anchor = (props) => {
  return (
    <>
      <a href={props.link} target={props.target}>
        {props.children}
      </a>
    </>
  );
};

export default Anchor;
