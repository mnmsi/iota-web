import React, { useEffect } from "react";
import "./SingleBlock.scss";
import { Card, Spinner } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Aos from "aos";
import moment from "moment";

const SingleBlock = (props) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });
  let singleBlogBlock = <Spinner animation="border" />;
  if (props) {
    singleBlogBlock = (
      <div className="single-block-wrapper" data-aos="fade-up">
        <Link
          to={props.link ? props.link : "#"}
          className={`${props.link ? " " : "noFlow"}`}
          onClick={props.handleClick}
        >
          <Card>
            <Card.Img variant="top" src={props.Image} alt="loading" />
            <Card.Body>
              <div className="single-blog-content">
                {props.publishDate ? (
                  <div className="single-blog-date">
                    <p className="mb-2 mt-2 font-smaller font-weight-lighter">
                      {moment.unix(props.publishDate).format("MMM Do YY")}
                    </p>
                  </div>
                ) : (
                  ""
                )}
                <div className="single-blog-title">
                  <h6>{props.title}</h6>
                </div>
                <div className="blog-anchor-symbol">
                  <BsArrowRight />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Link>
      </div>
    );
  }
  return <>{singleBlogBlock}</>;
};

export default SingleBlock;
