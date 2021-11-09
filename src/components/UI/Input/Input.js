import React from "react";
import { Form } from "react-bootstrap";
import "./Input.scss";

const Input = (props) => {
  let inputElement = null;
  switch (props.inputType) {
    case "file":
      inputElement = (
        <Form.Group>
          <Form.File
            as={props.inputType}
            id="exampleFormControlFile1"
            name={props.inputName}
            className={props.InputClasses}
            onChange={props.inputOnChange}
            accept={props.fileAccept}
            required={props.required}
          />
        </Form.Group>
      );
      break;
    case "textarea":
      inputElement = (
        <Form.Group>
          <Form.Control
            as={props.inputType}
            rows={props.inputRows}
            onChange={props.inputOnChange}
            placeholder={props.inputPlaceHolder}
            name={props.inputName}
            className={props.inputClassname}
            required={props.required}
          ></Form.Control>
        </Form.Group>
      );
      break;
    default:
      inputElement = (
        <Form.Group>
          {props.inputlabelText && (
            <Form.Label>{props.inputlabelText}</Form.Label>
          )}
          <Form.Control
            type={props.inputType}
            placeholder={props.inputPlaceHolder}
            className={props.inputClassname}
            onChange={props.inputOnChange}
            name={props.inputName}
            required={props.required}
          />
        </Form.Group>
      );
      break;
  }

  return <div>{inputElement}</div>;
};

export default Input;
