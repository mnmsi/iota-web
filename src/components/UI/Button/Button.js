import React from "react";

const Button = (props) => {
  return (
    <>
      <button
        className={props.btnClasses}
        type={props.btnType}
        disabled={props.disabled}
        onClick={props.handleClick}
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
