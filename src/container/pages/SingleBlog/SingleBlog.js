import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import TopBreadCrumb from '../../../components/TopBreadCrumb/TopBreadCrumb';
import '../../../components/SocialShare/SocialShare.scss';
import Image from '../../../components/UI/Image/Image';
import Input from '../../../components/UI/Input/Input';
import './SingleBlog.scss';
import Button from '../../../components/UI/Button/Button';
// import SocialShare from "../../../components/SocialShare/SocialShare";
import facebookIcon from '../../../assets/img/SocialShare/facebook.svg';
import tiwtterIcon from '../../../assets/img/SocialShare/circletwitter.svg';
import linkedIn from '../../../assets/img/SocialShare/Subtraction 2.svg';
import { FcCalendar } from 'react-icons/fc';
import moment from 'moment';
import SingleBLock from '../../../components/SingleBlock/SingleBlock';
import Aos from 'aos';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Actions from '../../../Redux/Actions/';
import { useLocation } from 'react-router-dom';
const SingleBlog = (props) => {
  let fbID = process.env.REACT_APP_FB_APP_ID;
  const [isBlogData, setBlogData] = useState([]);
  let slug = useParams().slug;
  let newText = slug.toLowerCase();
  let location = useLocation();
  useEffect(() => {
    window.scroll({ top: 0 });
    props.singleData(newText);
    props.blogs();
  }, []);

  useEffect(() => {
    setBlogData(props.blogData);
  }, [props.blogData]);

  let url = window.location.href;
  let soicalShareData = [
    {
      icon: facebookIcon,
      color: '#39599f',
      socialMediaName: 'facebook',
      url: { location },
      shareUrl:
        'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href,
    },
    {
      icon: tiwtterIcon,
      color: '#00acee',
      socialMediaName: 'Twitter',
      shareUrl: 'https://twitter.com/intent/tweet?url=' + window.location.href,
    },
    {
      icon: linkedIn,
      color: '#000',
      socialMediaName: 'linkedIn',
      url: { location },
      shareUrl:
        'https://www.linkedin.com/sharing/share-offsite/?url=' +
        window.location.href,
    },
  ];

  const clickToRedirect = (e, item) => {
    window.scrollTo({ top: 0 });
    setBlogData(item);
  };
  let RecommendedBlock = <Spinner animation='border' />;
  if (props.blogsData) {
    RecommendedBlock = (
      <>
        {props.blogsData.slice(0, 3).map((item, index) => {
          let heading = item.heading.toLowerCase().replace(/\s/g, '-');
          return (
            <Col md={4} key={index} className='mb-5'>
              <SingleBLock
                Image={item.image}
                title={item.heading}
                link={`${heading}`}
                handleClick={(e) => clickToRedirect(e, item)}
              />
            </Col>
          );
        })}
      </>
    );
  }
  return (
    <div className='single-blog-page-wrapper'>
      {/* top bread crumb */}
      {/*  
      <div className="work-details-page-top-breadcrumb pt-5 pb-5">
        {/* <Container>
          <TopBreadCrumb currentPage="blog tilte gose here" link="Blog" />
        </Container> 
      </div>
      */}
      {/* blog hero section */}
      <Container>
        <Row className='justify-content-center'>
          <Col md={7}>
            <div
              className='blog-image-wrapper'
              data-aos='zoom-out-up'
              data-aos-duration='2000'>
              <Image imgLink={isBlogData?.image} imgAlt='blog image' />
            </div>
          </Col>
        </Row>
        <div className='main-blog-wrapper pl-10'>
          <div className='blog-publish-wrapper d-flex'>
            <div className='blog-publist-date-wrapper d-flex'>
              <div className='blog-calendar mr-2'>
                <FcCalendar />
              </div>
              <div className='blog-publish-date'>
                {moment.unix(isBlogData?.created_at).calendar()}
              </div>
            </div>
            {/* <div className="blog-views-wrapper d-flex">
                <div className="blog-view-icon">
                  <AiFillThunderbolt />
                </div>
                <div className="blog-view-count">
                  <p>
                    {"26"}
                    <span> Views </span>
                  </p>
                </div>
              </div> */}
          </div>
          <div className='blog-heading-wrapper'>
            <h2>{isBlogData?.heading}</h2>
          </div>
          <div className='blog-author-wrapper mt-3 mb-3'>
            <p>
              {/*{props.blogData.author ? "By <span className=\"font-weight-bold\">Mahmudul Hasan</span>" : ""}*/}
            </p>
          </div>
          <div
            className='blog-body-wrapper mt-3 mb-2'
            dangerouslySetInnerHTML={{ __html: isBlogData?.content }}></div>
          <div className='blog-social-media-share-wrapper mt-3'>
            <a href={soicalShareData[0].shareUrl} target='_blank'>
              <div
                className='social-share-wrapper'
                style={{ backgroundColor: soicalShareData[0].color }}>
                <div className='social-media-icon'>
                  <Image imgLink={soicalShareData[0].icon} imgAlt='icon' />
                </div>
                <div className='soical-media-name'>
                  {soicalShareData[0].socialMediaName}
                </div>
              </div>
            </a>
            <a href={soicalShareData[1].shareUrl} target='_blank'>
              <div
                className='social-share-wrapper'
                style={{ backgroundColor: soicalShareData[1].color }}>
                <div className='social-media-icon'>
                  <Image imgLink={soicalShareData[1].icon} imgAlt='icon' />
                </div>
                <div className='soical-media-name'>
                  {soicalShareData[1].socialMediaName}
                </div>
              </div>
            </a>
            <a href={soicalShareData[2].shareUrl} target='_blank'>
              <div
                className='social-share-wrapper'
                style={{ backgroundColor: soicalShareData[2].color }}>
                <div className='social-media-icon'>
                  <Image imgLink={soicalShareData[2].icon} imgAlt='icon' />
                </div>
                <div className='soical-media-name'>
                  {soicalShareData[2].socialMediaName}
                </div>
              </div>
            </a>
          </div>
          {/* <div className="hear-your-thougths mt-5 mb-5 ">
            <h4>We will be happy to hear your thoughts</h4>
          </div>
          <Row className="justify-content-center align-items-center">
            <Col md="7">
              <div className="blog-comment-form-wrapper">
                <form>
                  <Input
                    inputType="textarea"
                    inputRows="5"
                    inputPlaceHolder="Leave a comment"
                  />
                  <div className="blog-button-submit-wrapper text-center">
                    <Button btnType="submit">Submit</Button>
                  </div>
                </form>
                <FacebookProvider appId={process.env.REACT_APP_FB_APP_ID}>
                  <Comments href={window.location.href} />
                </FacebookProvider>
              </div>
            </Col>
          </Row> */}
          {/* border */}
          <div className='section-break-border pt-10'>
            <hr></hr>
          </div>
          {/* recommended section */}
          <div className='recommended-section-wrapper pt-10  pb-10'>
            <Container>
              <Row>
                <Col md='7'>
                  <div className='recommended-border-wrapper d-flex  align-items-center '>
                    <div className='recommended-border'></div>
                    <div className='recommended-title-wrapper'>
                      <h2>Recommended for you</h2>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className='reccommend-blog-wrapper mt-4'>
                <Row>{RecommendedBlock}</Row>
              </div>
            </Container>
          </div>
        </div>
      </Container>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    blogLoading: state.blogReducer.loading,
    blogData: state.blogReducer.blog,
    blogsData: state.blogReducer.blogs,
  };
};
const mapDispathcToProps = (dispatch) => {
  return {
    singleData: (id) => dispatch(Actions.getSingleBlog(id)),
    blogs: () => dispatch(Actions.getBlogData()),
  };
};
export default connect(mapStateToProps, mapDispathcToProps)(SingleBlog);
