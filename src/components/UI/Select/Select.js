import React from "react";
import { Form } from "react-bootstrap";

import "./Select.scss";

const Select = (props) => {
  let optionLists = "";
  if (props.options) {
    optionLists = props.options.map((item) => {
      return (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      );
    });
  }

  return (
    <Form.Group controlId="formGridState">
      {props.selectLabelText && (
        <Form.Label>{props.selectLabelText}</Form.Label>
      )}
      <Form.Control
        as="select"
        defaultValue={props.selectDefaultVal}
        className={props.SelectClassName}
        onChange={props.inputOnChange}
        name={props.inputName}
      >
        {optionLists}
      </Form.Control>
    </Form.Group>
  );
};
export default Select;
