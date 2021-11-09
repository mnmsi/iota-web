import React from "react"
import Image from "../UI/Image/Image"
import { Row, Col } from "react-bootstrap"
import "./Technology.scss"
import leftArrow from "../../assets/img/testimonial/arrow-left1.svg"
import rightArrow from "../../assets/img/testimonial/arrow-left.svg"

const Technology = (props) => {
	return (
		<div className='technology-wrapper mb-5'>
			<div className='technology-category-wrapper text-center pb-5 mt-3'>
				<h2>{props.category}</h2>
			</div>
			<Row>
				{props.technologies
					? props.technologies.map((technologies, index) => {
							return (
								<Col lg='3' md='6' xs='6' sm='6' key={index}>
									<div className='technology-content'>
										<div className='tech-logo-wrapper'>
											<Image
												alt='tech image'
												imgLink={
													process.env.REACT_APP_BASE_API_URL +
													"storage/" +
													technologies.thumbnail
												}
											/>
										</div>
										<div className='tech-name mb-lg-3 mb-md-0'>
											<p>{technologies.name}</p>
										</div>
									</div>
								</Col>
							)
					  })
					: ""}
			</Row>
			<div className='d-flex justify-content-center align-items-center mt-4'>
				<div
					className='slider-control slider-control-left mr-2'
					onClick={props.handlePriv}>
					<Image imgLink={leftArrow} imgAlt='arrow' />
				</div>
				<div
					className='slider-control  slider-control-right'
					onClick={props.handleNext}>
					<Image imgLink={rightArrow} imgAlt='arrow' />
				</div>
			</div>
		</div>
	)
}

export default Technology
