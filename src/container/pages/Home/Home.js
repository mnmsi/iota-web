import React, { useState, useEffect, useRef } from 'react'
import './Home.scss'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import Hero from '../../../components/Hero/Hero'
import heroImage from '../../../assets/img/hero-section/heroSection.png'
import Border from '../../../components/UI/Border/Border'
import Form from '../../../components/Form/Form'
import Counter from '../../../components/Counter/Counter'
import Heading from '../../../components/UI/Heading/Heading'
import SingleWork from '../../../components/SingleWork/SingleWork'
import JoinUs from '../../../components/JoinUs/JoinUs'
import WhyChooseUs from '../../../components/WhyChooseUs/WhyChooseUs'
import WhyChooseImage from '../../../assets/img/whychoseIOTA/why.png'
import Title from '../../../components/UI/Heading/Title'
import SingleBlock from '../../../components/SingleBlock/SingleBlock'
import Cleints from '../../../components/Clients/Cleints'
import Service from '../../../components/Service/Service'
import Technology from '../../../components/Technology/Technology'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
// import industriesLogo from '../../../assets/img/industry/log.png'
// import IndustriesComponents from '../../../components/IndustriesComponents/IndustriesComponents'
// import tower from '../../../assets/img/industry/tower.png'
// import rocket from '../../../assets/img/industry/air.png'
// import Aos from 'aos'
import 'aos/dist/aos.css'
import * as Actions from '../../../Redux/Actions/'
import { connect } from 'react-redux'
import Formv2 from '../../../components/Form/Formv2'
const Home = (props) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    props.getBlogs()
    props.getClients()
    props.getwork()
    props.getTechnology()
    props.counter()
    props.service()
  }, [])
  const heroSectionData = {
    heroSectionTitle: 'Get Your Next Software Developed Without Any Hiccups!',
    heroSectionImage: heroImage,
  }

  const JoinUsData = {
    title: 'Want to Join Us as a Partner?',
    content:
      'IOTA Infotech ensure your software development project success with unconditional free trail just to check our analysis skill and work process.',
  }

  // let serviceData = props.serviceData;
  const whyChooseUsData = {
    topContent:
      'IOTA is a fast-growing software services company that offers next-generation technology consulting, helping and navigating clients throughout their digital transformation.',
    image: WhyChooseImage,
    listTitle: 'Our main areas of expertise include',
    list: [props.serviceData?.data?.service],
    bottomContent:
      'What makes us stand out in these fields is our creative approach, people-first attitude and the mixture of industry knowledge and cutting-edge technologies.',
  }

  // const serviceData = [
  //   {
  //     id: 1,
  //     heading: 'Mobile Application',
  //     content:
  //       'We build your mobile application following cutting edge technological trend.',
  //   },
  //   {
  //     id: 2,
  //     heading: 'Web Application',
  //     content:
  //       'Our web application highly responsive with quality browsing experience for your customer and friendly with future expansion.',
  //   },
  //   {
  //     id: 3,
  //     heading: 'Custom Software Development',
  //     content:
  //       'We develop bespoke custom software development with unfailing process and management',
  //   },
  //   {
  //     id: 4,
  //     heading: 'Cloud and IT Solution',
  //     content:
  //       'Cloud Computing an on demand computing system with reducing power for upfront cost.',
  //   },
  //   {
  //     id: 5,
  //     heading: 'Software testing QA',
  //     content:
  //       'Our QA team with update research documentation and proper Implementation guide.',
  //   },
  //   {
  //     id: 6,
  //     heading: 'Artificial Intelligence',
  //     content:
  //       'IOTA Infotech Limited will Help you with  AI-based algorithms & automated operation for scalable solutions.',
  //   },
  // ]

  let mobileServiceBlock = props.serviceLoading && (
    <Spinner animation='border' />
  )
  if (props.serviceData != null) {
    mobileServiceBlock = <Service data={props.serviceData?.data} />
  } else {
    mobileServiceBlock = (
      <>
        <h2 className='text-center'>No Data Found</h2>
      </>
    )
  }
  // const industriesData = [
  //   { image: industriesLogo, name: "fitness" },
  //   { image: tower, name: "telco" },
  //   { image: industriesLogo, name: "fitness" },
  //   { image: industriesLogo, name: "fitness" },
  //   { image: rocket, name: "fitness" },
  //   { image: industriesLogo, name: "fitness" },
  //   { image: rocket, name: "Education" },
  //   { image: industriesLogo, name: "fitness" },
  //   { image: industriesLogo, name: "fitness" },
  //   { image: rocket, name: "Education" },
  //   { image: industriesLogo, name: "fitness" },
  //   { image: industriesLogo, name: "fitness" },
  // ];
  const settings = {
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoPlaySpeed: 1000,
    speed: 1000,
    dots: false,
    Infinity: true,
  }
  const sliderRef = useRef()
  const gotoNext = () => {
    sliderRef.current.slickNext()
  }
  const gotoPrev = () => {
    sliderRef.current.slickPrev()
  }

  // counter
  let counterBlock = props.counterLoading && <Spinner animation='border' />
  if (props.counterData != null) {
    if (props.counterData) {
      counterBlock = (
        <>
          <Counter counterData={props.counterData} />
        </>
      )
    }
  } else {
    counterBlock = (
      <>
        <h2 className='text-center'>No Data Found</h2>
      </>
    )
  }
  let technologyBlock = props.techLoading && <Spinner animation='border' />
  if (props.techData != null) {
    technologyBlock = (
      <div className='home-page-technology-wrapper pt-5'>
        <Container>
          <Row>
            <Col md={12}>
              <Heading heading='Technology Stack' />
            </Col>
            <Col
              md={{ span: 7, offset: 5 }}
              sm={{ span: 7, offset: 4 }}
              xs={{ span: 8, offset: 4 }}>
              <Border isReverse={true} />
            </Col>
          </Row>
          <Slider {...settings} ref={sliderRef}>
            {props.techData.map((item, index) => {
              return (
                <div key={index}>
                  <Technology
                    category={item.name}
                    technologies={item.technology}
                    handlePriv={gotoNext}
                    handleNext={gotoPrev}
                  />
                </div>
              )
            })}
          </Slider>
        </Container>
      </div>
    )
  }
  let clientBlock = props.clientsLoading && <Spinner animation='border' />
  if (props.clientsData) {
    clientBlock = (
      <div className='home-page-clients-section pt-5' data-aos='fade-up'>
        <Cleints clientsData={props.clientsData} />
      </div>
    )
  }
  if (props.techData != null) {
  }
  let singleBlogBlock = props.blogLoading && <Spinner animation='border' />
  if (props.blogData) {
    singleBlogBlock = props.blogData.slice(0, 1).map((item) => {
      return (
        <SingleBlock
          Image={item.image}
          key={item.id}
          title={item.heading}
          link={`blog-details/${item.heading
            .toLowerCase()
            .replace(/\s/g, '-')}`}
        />
      )
    })
  }

  let multiBLogBLock = props.blogData == null && <Spinner animation='border' />
  if (props.blogData) {
    multiBLogBLock = (
      <Row className='homePageBlog-data m_b_block'>
        <Col md='6' lg='6' xs='6' sm='6' className='mb-2'>
          <SingleBlock
            Image={props.blogData[1]?.image}
            key={props.blogData[1]?.id}
            title={props.blogData[1]?.heading}
            link={`blog-details/${props.blogData[1]?.heading
              .toLowerCase()
              .replace(/\s/g, '-')}`}
          />
        </Col>
        <Col md='6' lg='6' xs='6' sm='6' className='mb-2'>
          <SingleBlock
            Image={props.blogData[2]?.image}
            key={props.blogData[2]?.id}
            title={props.blogData[2]?.heading}
            link={`blog-details/${props.blogData[2]?.heading
              .toLowerCase()
              .replace(/\s/g, '-')}`}
          />
        </Col>
        <Col md='6' lg='6' xs='6' sm='6' className='mb-2'>
          <SingleBlock
            Image={props.blogData[3]?.image}
            key={props.blogData[3]?.id}
            title={props.blogData[3]?.heading}
            link={`blog-details/${props.blogData[3]?.heading
              .toLowerCase()
              .replace(/\s/g, '-')}`}
          />
        </Col>
        <Col md='6' lg='6' xs='6' sm='6' className='mb-2'>
          <SingleBlock
            Image={props.blogData[4]?.image}
            key={props.blogData[4]?.id}
            title={props.blogData[4]?.heading}
            link={`blog-details/${props.blogData[4]?.heading
              .toLowerCase()
              .replace(/\s/g, '-')}`}
          />
        </Col>
      </Row>
    )
  }
  let someOfOurBLock = props.workLoading ? <Spinner animation='border' /> : ''
  if (props.workData != null) {
    someOfOurBLock = (
      <Container className='mb-5 some-of-our-work' data-aos='fade-up'>
        <Row>
          <Col md={12}>
            <div className=''>
              <div className='home-page-single-work-wrapper'>
                <SingleWork singelWorkData={props.workData} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
  return (
    <div
      className='main-home-page-wrapper '
      data-aos='fade-up'
      data-aos-delay='100'
      data-aos-duration='1000'>
      {/* Hero Section */}
      <div className='home-page-hero-section'>
        <Hero
          heroSectionTitle={heroSectionData.heroSectionTitle}
          heroSectionImage={heroSectionData.heroSectionImage}
        />
      </div>
      {/* why choose us section */}
      <div
        className='home-page-why-choose-us-section p-5 mb-5'
        data-aos='fade-up'>
        <Container>
          <Row>
            <Col md={12}>
              <Heading heading='Your Trusted Remote Software Development Agency' />
            </Col>
            <Col
              md={{ span: 7, offset: 5 }}
              sm={{ span: 7, offset: 4 }}
              xs={{ span: 8, offset: 4 }}>
              <Border isReverse={true} />
            </Col>
          </Row>
          {/* service section */}
          <div
            className='home-page-service-section d-lg-none d-md-block'
            data-aos='fade-up'>
            <Row className='align-item-center'>
              <Col md='12'>
                <div className='text-center'>
                  <p className='service-content'>
                    What makes us stand out in these fields is our creative
                    approach, people-first attitude and the mixture of industry
                    knowledge and cutting-edge technologies.
                  </p>
                </div>
              </Col>
              <Col xs='12' sm='12' md='12'>
                {mobileServiceBlock}
              </Col>
            </Row>
          </div>
          {/* why choose us */}
          {props.serviceData != null && (
            <WhyChooseUs
              whyChooseUsList={props.serviceData?.data}
              image={whyChooseUsData.image}
              topContent={whyChooseUsData.topContent}
              bottomContent={whyChooseUsData.bottomContent}
              listHeading={whyChooseUsData.listTitle}
            />
          )}
        </Container>
      </div>
      {/* some of our works section*/}
      {someOfOurBLock}
      {/* industries
      <div className="industries " data-aos="fade-up">
        <Container>
          <Col md={12} className="pt-5">
            <Heading heading="Technology Stack" />
          </Col>
          <Col
            md={{ span: 7, offset: 5 }}
            sm={{ span: 7, offset: 4 }}
            xs={{ span: 8, offset: 4 }}
          >
            <Border isReverse={true} />
          </Col>
        </Container>
        <div className="home-page-industries-wrapper" data-aos="fade-up">
          <Container>
            <Row className="justify-content-center align-items-center">
              {industriesData.map((item, index) => {
                return (
                  <Col
                    md="4"
                    lg="2"
                    sm="6"
                    xs="6"
                    className="single-i-item"
                    key={index}
                  >
                    <IndustriesComponents image={item.image} name={item.name} />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      </div> */}
      {/* technology used section */}
      {technologyBlock}
      {/* clients section */}
      {/* {clientBlock} */}
      {/* videos section */}
      {/*<div className="home-page-video-section pb-15" data-aos="fade-up">*/}
      {/*  <Container>*/}
      {/*    <Video*/}
      {/*      videos={videoData}*/}
      {/*      content="lorem ipusm dolor sit ament sadaioial; elit as"*/}
      {/*    />*/}
      {/*  </Container>*/}
      {/*</div>*/}
      {/* counter section */}
      <div
        className='home-page-counter-section-wrapper pt-10'
        data-aos='fade-up'>
        {counterBlock}
      </div>
      {/* blog section */}
      <div className='home-page-blog-section' data-aos='fade-up'>
        <Container>
          <Row className='justify-content-lg-start justify-content-center'>
            <Col lg='3' md='12' xs='12' sm='12'>
              <Heading textRight={true} heading='Blogs' />
              <Border />
              <Title className='h-50 d-flex  align-items-center font-weight-bolder'>
                Get Industry Insights
              </Title>
            </Col>
            <Col md={9}>
              <Row>
                <Col md='12' xs='12' lg='6' sm='12' className='single-blog'>
                  {singleBlogBlock}
                </Col>
                <Col md='12' lg='6' sm='12' xs='12'>
                  {multiBLogBLock}
                  {/* <Row className="justify-content-center d-md-flex d-lg-none">
                    <Col lg="2" sm="5" md="5" xs="4" className="text-center">
                      <div className="load-more-button"> Load more </div>
                    </Col>
                  </Row> */}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Join Us Section */}
      <div className='home-page-join-us-section mb-5' data-aos='fade-up'>
        <JoinUs title={JoinUsData.title} content={JoinUsData.content} />
        {/* <Image imgLink={actionAid} /> */}
      </div>
      {/* contact */}
      <div className='home-page-contact-section-wrapper' data-aos='fade-up'>
        <Container>
          <Row>
            <Col md='12'>
              <Heading heading='contact us' />
            </Col>
            <Col md='7' lg='7' xs='8' sm='7'>
              <Border />
            </Col>
          </Row>
          <Formv2>
            <div className='form-component-title'>
              <h4>
                We'd love to hear your requirements and work seamlessly together
              </h4>
            </div>
          </Formv2>
        </Container>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTechnology: () => dispatch(Actions.getTechnologyData()),
    getBlogs: () => dispatch(Actions.getBlogData()),
    getwork: () => dispatch(Actions.getAllWork()),
    getClients: () => dispatch(Actions.allClientsData()),
    counter: () => dispatch(Actions.getCounter()),
    service: () => dispatch(Actions.serviceData()),
  }
}

const mapStateToProps = (state) => {
  return {
    // blog
    blogLoading: state.blogReducer.loading,
    blogData: state.blogReducer?.blogs,
    // work
    workData: state.workReducer.works,
    workLoading: state.workReducer.loading,
    // clients
    clientsLoading: state.clientsReducer.loading,
    clientsData: state.clientsReducer.data,
    // tech
    techData: state.TechnologyReducer.data,
    techLoading: state.TechnologyReducer.loading,
    // counter
    counterData: state.CounterReducer.data,
    counterLoading: state.CounterReducer.loading,
    // service
    serviceData: state.ServiceReducer.data,
    serviceLoading: state.ServiceReducer.loading,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
