import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Industry.scss";
import ecommarceImage from "../../../assets/img/industry/pexels-nataliya-vaitkevich-6214476.svg";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import breadcrumbImage from "../../../assets/img/breadCrumb/breadCrumb.png";
import SingleBlock from "../../../components/SingleBlock/SingleBlock";

const Industry = (props) => {
  useEffect(() => {
    window.scroll({ top: 0 });
  }, []);

  const breadCrumbData = { img: breadcrumbImage, title: "Industries" };
  const industrypageData = [
    { img: ecommarceImage, title: "E-commarce" },
    { img: ecommarceImage, title: "E-commarce" },
    { img: ecommarceImage, title: "E-commarce" },
    { img: ecommarceImage, title: "E-commarce" },
    { img: ecommarceImage, title: "E-commarce" },
    { img: ecommarceImage, title: "E-commarce" },
    { img: ecommarceImage, title: "E-commarce" },
    { img: ecommarceImage, title: "E-commarce" },
    { img: ecommarceImage, title: "E-commarce" },
    { img: ecommarceImage, title: "E-commarce" },
    { img: ecommarceImage, title: "E-commarce" },
    { img: ecommarceImage, title: "E-commarce" },
    { img: ecommarceImage, title: "E-commarce" },
  ];
  return (
    <div className="industry-page-wrapper pb-10">
      {/* breadcrumb */}

      <Breadcrumb
        BreadcrumbImage={breadCrumbData.img}
        BreadcrumbTitle={breadCrumbData.title}
      />
      {/* Industry */}
      <Container>
        <div className="industries-page-wrapper mt-5 pl-5 pr-5">
          <Row>
            {industrypageData.map((item, index) => {
              return (
                <Col
                  lg="4"
                  md="6"
                  xs="12"
                  sm="12"
                  key={index}
                  className="p-md-3 p-sm-3 p-0 "
                >
                  <SingleBlock
                    Image={item.img}
                    title={item.title}
                    link="/industry-details"
                  />
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Industry;
