import React, { useState, useEffect } from "react"
import { Container, Col, Row, Spinner, Modal } from "react-bootstrap"
import { useInView } from "react-intersection-observer"
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb"
import breadCrumbImage from "../../../assets/img/breadCrumb/breadCrumb.png"
import "./About.scss"
import Heading from "../../../components/UI/Heading/Heading"
import Border from "../../../components/UI/Border/Border"
import Mission from "../../../components/Mission/Mission"
import Gallery from "../../../components/Gallery/Gallery"
import Management from "../../../components/ManageMent/Management"
import chiremanImage from "../../../assets/img/management/formal-corporate-dress-500x500.jpg"
import ctoImage from "../../../assets/img/management/office-boy-500x500.jpeg"
import coImage from "../../../assets/img/management/slim-fit-formal-dress--500x500.jpg"
import Testimonial from "../../../components/Testimonial/Testimonial"
import missionImage from "../../../assets/img/mission/1.png"
import mythology from "../../../assets/img/mission/3.png"
import vision from "../../../assets/img/mission/2.png"
import SingleVideo from "../../../components/Video/SingleVideo"
import ReactPlayer from "react-player"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import Aos from "aos"
import "aos/dist/aos.css"
import * as ActionType from "../../../Redux/Actions/"
import { connect } from "react-redux"
import Galleryv2 from "../../../components/Gallery/Galleryv2"
import breadCrumbVideo from "../../../assets/video/workstation.mp4"

const About = (props) => {
	// set image in local state
	const [images, setImages] = useState([])
	// set video in local state
	const [isVideo, setVideo] = useState([])
	// page count for image
	const [pageCount, setPageCount] = useState(1)
	// page count for video
	const [videoPageCount, setVideoPageCount] = useState(1)
	// intersection observer
	const { ref, inView } = useInView({
		/* Optional options */
		threshold: 0,
	})
	useEffect(() => {
		if (
			inView === true &&
			isShowGallery === 1 &&
			props.galleryData?.meta?.last_page >= pageCount
		) {
			props.getImage(pageCount + 1)
			setPageCount(pageCount + 1)
		}
		if (
			inView === true &&
			isShowGallery === 2 &&
			props.videoData?.meta?.last_page >= videoPageCount
		) {
			props.video(videoPageCount + 1)
			setVideoPageCount(videoPageCount + 1)
		}
	}, [inView])
	useEffect(() => {
		window.scroll({ top: 0 })
		Aos.init({ duration: 600 })
		props.video(videoPageCount)
		props.reviews()
		props.getImage(pageCount)
		// setPageCount(pageCount + 1);
	}, [])

	useEffect(() => {
		if (props.galleryData != null) {
			if (props.galleryData.meta.current_page === 1) {
				setImages(props.galleryData?.data)
			} else if (props.galleryData.meta.current_page !== 1) {
				setImages((prevArray) =>
					prevArray != null
						? [...prevArray, ...props.galleryData?.data]
						: props.galleryData?.data,
				)
			}
		}
	}, [props.galleryData])
	useEffect(() => {
		if (props.videoData != null) {
			if (props.videoData.meta.current_page === 1) {
				setVideo(props.videoData?.data)
			} else if (props.videoData.meta.current_page !== 1) {
				setVideo((prevArray) =>
					prevArray != null
						? [...prevArray, ...props.videoData?.data]
						: props.videoData?.data,
				)
			}
		}
	}, [props.videoData])
	const settings = {
		dots: false,
		// infinite: props.videoData?.data.length >= 2 && true,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoPlaySpeed: 3000,
		speed: 500,
		draggable: false,
		// call before after for calling api
		beforeChange: (current) => {
			if (props.videoData?.meta?.last_page >= videoPageCount) {
				props.video(videoPageCount + 1)
				setVideoPageCount(videoPageCount + 1)
			}
		},
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				},
			},
		],
	}
	// const missionAndvisionData = [
	//   {
	//     image: mythology,
	//   },
	//   {
	//     image: missionImage,
	//   },
	//   {
	//     image: vision,
	//   },
	// ]
	const breadCrumbData = {
		title: "About IOTA infotech",
		image: breadCrumbImage,
	}

	// const managementData = [
	//   { image: chiremanImage, name: 'Arifur Rahman', position: 'Chairman' },
	//   { image: coImage, name: 'Amit Saha', position: 'CEO' },
	//   { image: ctoImage, name: 'Anik Chakrabortty', position: 'CTO' },
	// ]
	const [isShowGallery, setShowIsGallery] = useState(1)
	const [isShow, setIsShow] = useState(false)
	const [videoLink, setVideoLink] = useState("")
	const openVideo = (link) => {
		setVideoLink(link)
		setIsShow(true)
	}
	const showGallery = (id) => {
		setShowIsGallery(id)
	}

	const showVideo = (id) => {
		setShowIsGallery(id)
	}

	const handleClose = () => {
		setIsShow(false)
	}
	let testimonialBlock = props.reviewLoading && <Spinner animation='border' />
	if (props.reviewData != null) {
		testimonialBlock = (
			<Container>
				<Testimonial testimonialData={props.reviewData.data} />
			</Container>
		)
	}
	let GalleryV2Block = props.galleryLoading && <Spinner animation='border' />
	if (images != null) {
		GalleryV2Block = (
			<>
				<Galleryv2 data={images} />
				{props.galleryData?.meta?.current_page !=
					props.galleryData?.meta?.last_page && (
					<Row>
						<Col lg='2' sm='2' md='2' className='text-center m-auto ' ref={ref}>
							<Spinner animation='grow' />
						</Col>
					</Row>
				)}
			</>
		)
	}
	let videoGalleryBlock = props.vidoeLoading && <Spinner animation='border' />
	if (props.videoData != null) {
		videoGalleryBlock = (
			<>
				<div className='video-gallery-wrapper'>
					<Row>
						{isVideo.map((item, index) => {
							return (
								<Col md='4' className='mb-4' key={index}>
									<SingleVideo
										thumbnail={item.custom_thumbnail}
										OpenVideoHandler={() => openVideo(item.content)}
									/>
								</Col>
							)
						})}
					</Row>
					<Row>
						<Col md='12'>
							<Modal
								show={isShow}
								size='md'
								onHide={handleClose}
								className='gallery-modal-wrapper video-modal'
								aria-labelledby='contained-modal-title-vcenter'
								centered>
								<Modal.Header closeButton></Modal.Header>
								<Modal.Body>
									<div className='full-screen-video'>
										<ReactPlayer
											url={videoLink}
											controls={true}
											playing={true}
											loop={true}
											height='100%'
											width='100%'
										/>
									</div>
								</Modal.Body>
							</Modal>
						</Col>
					</Row>
					{props.videoData?.meta?.current_page !==
						props.videoData?.meta?.last_page && (
						<Row>
							<Col
								lg='2'
								sm='2'
								md='2'
								className='text-center m-auto '
								ref={ref}>
								{/* <Spinner animation='grow' /> */}
							</Col>
						</Row>
					)}
				</div>
				<div className='mobile-video-gallery-wrapper d-lg-none d-md-block'>
					<Slider {...settings}>
						{isVideo.map((item, index) => {
							return (
								<div
									className='mobile-section-video-gallery-wrapper'
									key={index}>
									<SingleVideo
										thumbnail={item.custom_thumbnail}
										OpenVideoHandler={() => openVideo(item.content)}
									/>
								</div>
							)
						})}
					</Slider>
				</div>
			</>
		)
	}
	return (
		<div className='about-page-wrapper'>
			{/* bread cramb */}
			<div className='about-page-bread-crumb-wrapper section-devider'>
				<Breadcrumb
					BreadcrumbTitle={breadCrumbData.title}
					video={breadCrumbVideo}
				/>
			</div>
			{/* mission and vission */}
			<div className='mission-and-vission-wrapper section-devider' data-aos=''>
				<Container>
					{/* mythology */}
					<div className='our-mythology'>
						<Row>
							<Col md={12}>
								<Heading heading='Our Mythology ' />
							</Col>
							<Col
								md={{ span: 7, offset: 5 }}
								sm={{ span: 7, offset: 4 }}
								xs={{ span: 8, offset: 4 }}>
								<Border />
							</Col>
						</Row>
						<Mission
							content='IOTA Infotech Limited has earned a global reputation as a software development company. Our solutions have satisfied a wide range of organizations both international and local. We offer a variety of custom software solutions implemented as per the client’s needs. Our services enable the implementation of e-Government, e-Procurement, and e-Business concepts and strategies'
							image={mythology}
						/>
					</div>
					{/* Mission */}
					<div className='our-mission p-3' data-aos='fade-in'>
						<Row>
							<Col md={12}>
								<Heading heading='Our Mission' />
							</Col>
							<Col md={7} sm='7' xs='8'>
								<Border />
							</Col>
						</Row>
						<Mission
							content='We thrive to empower growing businesses as well as enthusiastic individuals who seek to take their business and ideas to the next level through the efficient use of information technology and improved digital experience. We leverage our experience, expertise and diverse resources to the best interest of our partners, so we can keep growing together.'
							image={missionImage}
							isReverse={true}
						/>
					</div>
					{/* Vision */}
					<div className='our-vision' data-aos='fade-in'>
						<Row>
							<Col md={12}>
								<Heading heading='Our Vision' />
							</Col>
							<Col
								md={{ span: 7, offset: 5 }}
								sm={{ span: 7, offset: 4 }}
								xs={{ span: 8, offset: 4 }}>
								<Border />
							</Col>
						</Row>
						<Mission
							content='Our vision is to empower the future by enabling the global business community. We want to contribute to the economy by creating improved learning and employment opportunities. We strive to create values that not only reflect the success of our partners and stakeholders but also create an impact around that helps to make this world a little smarter and a lot better place.'
							image={vision}
							isReverse={false}
						/>
					</div>
				</Container>
			</div>
			{/* Testimonial Section */}
			<div
				className='about-page-testimonial-wrapper  section-devider'
				data-aos='fade-in'>
				{testimonialBlock}
			</div>
			{/* Management Section */}
			{/* <div
        className="about-page-management-section section-devider"
        data-aos="zoom-in-up"
      >
        <Container>
          <Row>
            <Col md={12}>
              <Heading heading="IOTA FAMILY" />
            </Col>
            <Col md={7} sm="8" xs="8">
              <Border />
            </Col>
          </Row>
          <Management managementData={managementData} />
        </Container>
      </div> */}
			{/* Gallery Section */}
			<div className='about-page-gallery-container section-devider'>
				<Container>
					<Row>
						<Col md={12}>
							<Heading heading='IOTA Gallery ' />
						</Col>
						<Col
							md={{ span: 7, offset: 5 }}
							sm={{ span: 7, offset: 4 }}
							xs={{ span: 8, offset: 4 }}>
							<Border />
						</Col>
					</Row>
					{/* gallery control */}
					<div className=' gallery-button-wrapper d-flex justify-content-center mb-5'>
						<div
							className={`gallery-button image-gallery-button ${
								isShowGallery == 1 ? "button-active" : ""
							}`}
							onClick={() => showGallery(1)}>
							Images
						</div>
						<div
							className={`gallery-button image-video-button ${
								isShowGallery == 2 ? "button-active" : ""
							}`}
							onClick={() => showVideo(2)}>
							Videos
						</div>
					</div>
					{isShowGallery === 1 ? (
						<div className=''>{GalleryV2Block}</div>
					) : isShowGallery === 2 ? (
						videoGalleryBlock
					) : (
						""
					)}
				</Container>
			</div>
		</div>
	)
}
const mapStateToProps = (state) => {
	return {
		galleryLoading: state.galleryReducer.loading,
		galleryData: state.galleryReducer.data,
		// video
		vidoeLoading: state.VideoReducer.loading,
		videoData: state.VideoReducer.data,
		// review
		reviewLoading: state.ReviewReducer.loading,
		reviewData: state.ReviewReducer.data,
	}
}
const mapDispathcToProps = (dispathc) => {
	return {
		getImage: (pageNo) => dispathc(ActionType.getAllImage(pageNo)),
		video: (pageNo) => dispathc(ActionType.getVidoeData(pageNo)),
		reviews: () => dispathc(ActionType.reviewData()),
	}
}
export default connect(mapStateToProps, mapDispathcToProps)(About)
