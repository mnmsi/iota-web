import React, { useRef, useState, useEffect } from "react"
import { Container, Row, Col, Spinner } from "react-bootstrap"
import { useParams } from "react-router-dom"
import Image from "../../../components/UI/Image/Image"
import "./WorkDetails.scss"
import SingleWork from "../../../components/Work-v2/SingleWork"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import leftArrow from "../../../assets/img/testimonial/arrow-left.svg"
import rightArrow from "../../../assets/img/testimonial/arrow-left1.svg"
import Border from "../../../components/UI/Border/Border"
import mobileFrame from "../../../assets/img/mobileFrame.png"
import playstoreImage from "../../../assets/img/store/store.svg"
import appleStore from "../../../assets/img/store/apple.svg"
import Aos from "aos"
import { connect } from "react-redux"
import * as Actions from "../../../Redux/Actions"

const WorkDetails = (props) => {
	// page number for work
	const [pageCount, setPageCount] = useState(1)
	let slug = useParams().slug
	useEffect(() => {
		window.scroll({ top: 0 })
		Aos.init({ duration: 700 })
		props.work(slug)
		props.works(pageCount)
	}, [])
	const [isWorkData, setAllWorkData] = useState()
	useEffect(() => {
		if (props.workData != null) {
			setAllWorkData(props.workData)
		}
	}, [props.workData])
	const screenShotSettings = {
		dots: false,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		autoplay: false,
		autoPlaySpeed: 1000,
		centerMode: false,
		speed: 1000,
		draggable: false,
		swipe: false,

		afterChange: (remaining) => {
			setSlideCount(remaining + 1)
		},
		beforeChange: (current) => {
			setSlideCount(current + 1)
		},
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				},
			},
		],
	}
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		autoPlaySpeed: 1000,
		autoplay: true,
		speed: 1000,
		draggable: true,
		swipeToSlide: true,
		touchMove: true,
		beforeChange: (current) => {
			// if (props.works?.meta?.last_page >= pageCount) {
			//   props.works(pageCount + 1)
			//   setPageCount(pageCount + 1)
			// }
		},
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}
	const ScreenShotRef = useRef()
	const [slideCount, setSlideCount] = useState(1)
	const gotoNext = () => {
		ScreenShotRef.current.slickNext()
	}
	const gotoPrev = () => {
		ScreenShotRef.current.slickPrev()
	}
	const redirectTop = (e, item) => {
		window.scroll({ top: 0, behavior: "smooth" })
		setAllWorkData(item)
	}
	let appDownloadBlock = ""
	if (props.workData?.app_store_link || props.workData?.play_store_link) {
		appDownloadBlock = (
			<div className='app_d_container'>
				<Col lg='9' md='12' sm='12 pb-15'>
					<h4 className='f_h_text text-left pb-3'>Available Now</h4>
					<Row>
						<Col md='12' lg='9'>
							<Row className='align-items-center'>
								{isWorkData?.app_store_link ? (
									<Col lg='5' md='6' sm='6' xs='6'>
										<div className='a_download_image_wrapper'>
											<a href={isWorkData?.app_store_link}>
												<Image imgLink={appleStore} />
											</a>
										</div>
									</Col>
								) : (
									""
								)}
								{isWorkData?.play_store_link ? (
									<Col md='6' lg='5' sm='6' xs='6'>
										<div className='a_download_image_wrapper'>
											<a href={isWorkData?.play_store_link}>
												<Image imgLink={playstoreImage} />
											</a>
										</div>
									</Col>
								) : (
									""
								)}
							</Row>
						</Col>
					</Row>
				</Col>
			</div>
		)
	}
	let allWorkBlock = <Spinner animation='border' />
	if (props.allWorkData != null) {
		allWorkBlock = (
			<Slider {...settings}>
				{props.allWorkData.data.map((item, index) => {
					return (
						<div key={index}>
							<SingleWork
								projectImage={item.featured_image}
								projectTitle={item.name}
								link={item.id}
								handleClick={(e) => redirectTop(e, item)}
							/>
						</div>
					)
				})}
			</Slider>
		)
	}
	let screenshotsBlock = ""
	if (props.workData?.gallery?.length > 0) {
		if (isWorkData?.gallery) {
			screenshotsBlock = (
				<div
					className='project-screenshot-section-wrapper position-relative pb-15'
					data-aos='zoom-in-right'
					data-aos-duration='100'>
					<div className='screenshot-heading-wrapper mb-5 d-lg-none d-md-block'>
						<Row className='pb-5'>
							<Col md='12' lg='5'>
								<div className='screenshot-section-heading mt-sm-4'>
									<h2>App ScreenShot</h2>
									<div className='slider-counter-and-control-wrapper d-flex align-items-center mt-4'>
										<div
											className='slider-control-nexArrow slider-control'
											onClick={gotoNext}>
											<Image imgLink={rightArrow} imgALt='arrow' />
										</div>
										<div className='slider-count mr-2 ml-2'>
											{slideCount + 1} / {isWorkData?.gallery.length}
										</div>
										<div
											className='slider-control-nexArrow slider-control'
											onClick={gotoPrev}>
											<Image imgLink={leftArrow} imgALt='arrow' />
										</div>
									</div>
								</div>
							</Col>
							<Col
								md={{ span: 7, offset: 5 }}
								sm={{ span: 7, offset: 4 }}
								xs={{ span: 8, offset: 4 }}
								className='pt-3'>
								<Border isReverse={true} isMargin={true} />
							</Col>
						</Row>
					</div>
					<Row className=''>
						<Col md='4' lg='4'>
							<div className='screenshot-section-heading mobile-section-heading h-100 flex-column justify-content-center'>
								<h2>App ScreenShot</h2>
								<div className='slider-counter-and-control-wrapper d-flex align-items-center mt-4'>
									<div
										className='slider-control-nexArrow slider-control'
										onClick={gotoNext}>
										<Image imgLink={rightArrow} imgALt='arrow' />
									</div>
									<div className='slider-count mr-2 ml-2'>
										{slideCount} / {isWorkData?.gallery.length}
									</div>
									<div
										className='slider-control-nexArrow slider-control'
										onClick={gotoPrev}>
										<Image imgLink={leftArrow} imgALt='arrow' />
									</div>
								</div>
							</div>
						</Col>
						{isWorkData?.gallery ? (
							<Col md='12' lg='8'>
								<div className='screenshot-main-slider-section position-relative'>
									<div className='mobile-frame'>
										<Image imgLink={mobileFrame} imgAlt='mobile frame' />
									</div>
									<Slider {...screenShotSettings} ref={ScreenShotRef}>
										{isWorkData?.gallery.map((item, index) => {
											return (
												<div key={index} className='screenshot-wrapper'>
													<img alt='screenshot' src={item.image} key={index} />
												</div>
											)
										})}
									</Slider>
								</div>
							</Col>
						) : (
							"no screen shot"
						)}
					</Row>
				</div>
			)
		}
	} else {
		// screenshotsBlock = <h4 className='text-center'>No Screen Shot Available</h4>
	}
	let technologyBLock = <Spinner animation='border' />
	if (props.workData != null) {
		technologyBLock = isWorkData?.technology.map((item, index) => {
			return (
				<Col key={index} md='6' xs='6' sm='6' lg='4'>
					<div className='tech-list-content-wrapper'>
						<div className='tech-list-image-wrapper'>
							<Image imgLink={item.colored_image} imgAlt='tech image' />
						</div>
						<div className='techlist-technologoy-name-wrapper'>{item.name}</div>
					</div>
				</Col>
			)
		})
	}
	let featuresBlock = <Spinner animation='border' />
	if (props.workData) {
		featuresBlock = isWorkData?.feature.map((item, index) => {
			return (
				<Col md='6' sm='6' xs='6' lg='4' key={index}>
					<div className='featured-list-item'>
						<p>{item.feature}</p>
					</div>
				</Col>
			)
		})
	}
	return (
		<div className='work-details-page-wrapper'>
			{/* top bread crumb */}
			<div className='work-details-page-top-breadcrumb '>
				{/* <Container>
          <TopBreadCrumb currentPage="Project Details" link="Our-Works" />
        </Container> */}
			</div>
			{/* project details */}
			<div className='work-details-page-project-details-section'>
				<Container>
					<div className='work-details-container'>
						<div className='work-details-header '>
							<Row className='justify-content-center'>
								<Col lg={8} md='12' sm='12'>
									<div
										className='work-details-single-image-wrapper'
										data-aos='fade-in'
										data-aos-duration='100'>
										<div className='w_s_i'>
											<Image
												imgLink={isWorkData?.featured_image}
												imgAlt='work image'
											/>
										</div>
									</div>
								</Col>
							</Row>
							<Row className='justify-content-center'>
								<Col lg={8} md='12' sm='12'>
									<div className='work-details-content-wrapper'>
										<h2 className=' font-weight-bold text-details-content-heading text-left'>
											{isWorkData?.name}
										</h2>
										<p className='mt-sm-3'>{isWorkData?.description}</p>
									</div>
								</Col>
							</Row>
						</div>
						<div className='work-featured-container '>
							<>
								<div className='work-featured-content'>
									<Col lg='10' md='12' sm='12'>
										<div
											className='featured-list'
											// data-aos="zoom-in-right"
											// data-aos-dura="2000"
										>
											<h4 className='f_h_text text-left'>APP Features</h4>
											<Row>{featuresBlock}</Row>
										</div>
									</Col>
								</div>
							</>
						</div>
						<div className='technology-container pb-10'>
							<Row>
								<Col lg='9' md='12' sm='12'>
									<div
										className='tech-list'
										data-aos='fade-in'
										data-aos-duration='100'>
										<h4 className='t_h_text pb-2 text-left'>Technology Used</h4>
										<Row>{technologyBLock}</Row>
									</div>
								</Col>
							</Row>
						</div>
						{appDownloadBlock}
					</div>
					{/* project screenshot section */}
					{screenshotsBlock}
					<Container>
						<div className='other-project-section pt-10 pb-10  '>
							<Row>
								<Col md='7'>
									<div className='work-details d-flex  align-items-center mb-5'>
										<div className='work-details-border'></div>
										<div className='work-details-title'>
											<h2>Others Project</h2>
										</div>
									</div>
								</Col>
							</Row>
							{allWorkBlock}
						</div>
					</Container>
				</Container>
			</div>
		</div>
	)
}
const mapStateToProps = (state) => {
	return {
		workData: state.workReducer.work,
		allWorkData: state.workReducer.works,
	}
}
const mapDispathcToProps = (dispathc) => {
	return {
		works: (pageNo) => dispathc(Actions.getAllWork(pageNo)),
		work: (id) => dispathc(Actions.getSingleWorkData(id)),
	}
}

export default connect(mapStateToProps, mapDispathcToProps)(WorkDetails)
