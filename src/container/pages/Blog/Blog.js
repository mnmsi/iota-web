import React, { useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import Image from "../../../components/UI/Image/Image";
import "./Blog.scss";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import breadcrumbImage from "../../../assets/img/breadCrumb/breadCrumb.png";
import SingleBlock from "../../../components/SingleBlock/SingleBlock";
import { connect } from "react-redux";
import * as Actions from "../../../Redux/Actions/";
import breadCrumbVidoe from "../../../assets/video/workstation.mp4";
import gblog1 from "../../../assets/img/Blog Post/Gray BOX/ofshore.png";
import gblog2 from "../../../assets/img/Blog Post/Gray BOX/project-based.png";
import gblog3 from "../../../assets/img/Blog Post/Gray BOX/cost.png";
import gblog4 from "../../../assets/img/Blog Post/Gray BOX/dedicated.png";
import gblog5 from "../../../assets/img/Blog Post/Gray BOX/remote.png";
import gblog6 from "../../../assets/img/Blog Post/Gray BOX/sla.png";

const Blog = (props) => {
  useEffect(() => {
    window.scroll({ top: 0 });
    props.getBlog();
  }, []);

  const breadCrumbData = {
    video: breadCrumbVidoe,
    title: "Get Industry Insights",
  };

  let blogBlock = props.blogLoading && <Spinner animation="border" />;
  if (props.blogData) {
    blogBlock = props.blogData.map((item, index) => {
      let heading = item.heading.toLowerCase().replace(/\s/g, "-");
      return (
        <Col lg="4" sm="12" xs="12" md="6" className="p-md-3 p-sm-3 p-0 ">
          <SingleBlock
            key={index}
            Image={item.image}
            title={item.heading}
            // publishDate={item.created_at}
            link={`blog-details/${heading}`}
          />
        </Col>
      );
    });
  }
  return (
    <div className="blog-page-wrapper pb-10">
      {/* breadcrumb */}

      <Breadcrumb
        video={breadCrumbData.video}
        BreadcrumbTitle={breadCrumbData.title}
      />
      {/* Industry */}
      <Container>
        <div className="industries-page-wrapper mt-5 pl-5 pr-5">
          <Row>{blogBlock}</Row>
        </div>
      </Container>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    blogLoading: state.blogReducer.loading,
    blogData: state.blogReducer.blogs,
  };
};
const mapDispathcToProps = (dispatch) => {
  return {
    getBlog: () => dispatch(Actions.getBlogData()),
  };
};
export default connect(mapStateToProps, mapDispathcToProps)(Blog);
