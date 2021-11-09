import React from "react";
import { Link } from "react-router-dom";
import "./TopBreadCrumb.scss";

const TopBreadCrumb = (props) => {
  return (
    <div className="breadcrumb-wrapper">
      <ul className="d-flex">
        <li>{props.link && <Link to={props.link}>{props.link}</Link>}</li>
        <li> {" > "} </li>
        <li className="text-red">{props.currentPage}</li>
      </ul>
    </div>
  );
};

export default TopBreadCrumb;
