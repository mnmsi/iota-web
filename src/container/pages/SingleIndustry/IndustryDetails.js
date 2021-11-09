import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TopBreadCrumb from "../../../components/TopBreadCrumb/TopBreadCrumb";
import Image from "../../../components/UI/Image/Image";
import Aos from "aos";
const IndustryDetails = (props) => {
  useEffect(() => {
    Aos.init({});
    window.scroll({ top: 0 });
  }, []);
  return (
    <div className="industry-details-page-wrapper">
      {/* top bread crumb */}
      <div className="work-details-page-top-breadcrumb pt-5 pb-5">
        <Container>
          {/* <TopBreadCrumb currentPage="industry title here" link="Industry" /> */}
          <Row
            className="justify-content-center"
            data-aos="zoom-out-up"
            data-aos-duration="1500"
          >
            <Col md={7}>
              <div className="blog-image-wrapper mt-5 mb-5">
                <Image
                  imgLink={
                    "https://images.unsplash.com/photo-1629051255944-b4e56fa5781e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  }
                  imgAlt="blog image"
                />
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md="10">
              <div className="blog-heading-wrapper" data-aos="fade-right">
                <h2>
                  Bangladesh slips 2 steps in corruption index, second-worst in
                  South Asia
                </h2>
              </div>
              <div className="blog-body-wrapper mt-3 mb-2" data-aos="fade-up">
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and
                  Evil) by Cicero, written in 45 BC. This book is a treatise on
                  the theory of ethics, very popular during the Renaissance. The
                  first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                  comes from a line in section 1.10.32. The standard chunk of
                  Lorem Ipsum used since the 1500s is reproduced below for those
                  interested. Sections 1.10.32 and 1.10.33 from "de Finibus
                  Bonorum et Malorum" by Cicero are also reproduced in their
                  exact original form, accompanied by English versions from the
                  1914 translation by H. Rackham.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default IndustryDetails;
