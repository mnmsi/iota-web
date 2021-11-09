import React, { useEffect } from "react"
import ReactCountryFlag from "react-country-flag"
import { Container, Col, Row, Spinner } from "react-bootstrap"
import Image from "../UI/Image/Image"
import "./Footer.scss"
import whiteLogo from "../../assets/img/WhiteLogo.svg"
import BasisLogo from "../../assets/img/footer/basis.svg"
import { Link, useLocation } from "react-router-dom"
import * as fontAwesome from "react-icons/fa"
import Anchor from "../UI/Anchor/Anchor"
import Launch from "../../assets/img/footer/Launch.png"
// import bd from '../../assets/img/flug/bd.png'
// import us from '../../assets/img/flug/usa.png'
// import uk from '../../assets/img/flug/aus.png'
import { serviceData, getContact } from "../../Redux/Actions"
import { connect } from "react-redux"
const FooterV2 = (props) => {
	useEffect(() => {
		props.service()
		props.contact()
	}, [])
	let serviceBlock = props.loading && <Spinner animation='border' />
	if (props.data != null) {
		serviceBlock = (
			<>
				<Col md='12' lg='3' sm='12'>
					<div className='f_service_section mb-md-5'>
						<div className='v2_footer-section-title'>
							<h3>Service</h3>
						</div>
						<div className='v2_footer-menu-element'>
							<ul>
								{props.data?.data?.map((item, index) => {
									return <li key={index}>{item.service}</li>
								})}
							</ul>
						</div>
					</div>
				</Col>
			</>
		)
	}
	let firstBlock = <Spinner animation='border' />
	if (props.contactData != null) {
		firstBlock = (
			<>
				<ul>
					<li className='footer-address'>{props.contactData[0]?.address}</li>
				</ul>
				{/* <h3>Email</h3> */}
				<ul>
					<li>
						<a href='mailto:hello@iotait.tech'>hello@iotait.tech</a>
					</li>
				</ul>
				<div className='v2_contact_list'>
					<ul>
						{props.contactData[0]?.phone.map((item, index) => {
							return (
								<li key={index}>
									<ReactCountryFlag countryCode={item.country} svg />
									{item.number}
								</li>
							)
						})}
					</ul>
				</div>
			</>
		)
	}
	let footerIconBlock = <Spinner animation='border' />
	if (props.contactData != null) {
		if (props.contactData[0]?.phone != null) {
			footerIconBlock = (
				<div className='v2_footer-menu-element'>
					<ul>
						<li>
							<Anchor link={props.contactData[0]?.facebook} target='_blank'>
								<fontAwesome.FaFacebookF />
							</Anchor>
						</li>
						<li>
							<Anchor link={props.contactData[0]?.whatsapp} target='_blank'>
								<fontAwesome.FaWhatsapp />
							</Anchor>
						</li>
						<li>
							<Anchor link={props.contactData[0]?.skype} target='_blank'>
								<fontAwesome.FaSkype />
							</Anchor>
						</li>
						<li>
							<Anchor link={props.contactData[0]?.instagram} target='_blank'>
								<fontAwesome.FaInstagram />
							</Anchor>
						</li>
					</ul>
					<ul>
						<li>
							<Anchor link={props.contactData[0]?.twitter} target='_blank'>
								<fontAwesome.FaTwitter />
							</Anchor>
						</li>
						<li>
							<Anchor link={props.contactData[0]?.linkedin} target='_blank'>
								<fontAwesome.FaLinkedinIn />
							</Anchor>
						</li>
						<li>
							<Anchor link={props.contactData[0]?.dribbble} target='_blank'>
								<fontAwesome.FaDribbble />
							</Anchor>
						</li>

						<li>
							<Anchor link={props.contactData[0]?.youtube} target='_blank'>
								<fontAwesome.FaYoutube />
							</Anchor>
						</li>
					</ul>
				</div>
			)
		} else {
			footerIconBlock = (
				<>
					<h2 className='text-center'>No Data Found</h2>
				</>
			)
		}
	}
	const location = useLocation()
	const footerData = {
		IotaLogo: whiteLogo,
		basisLogo: BasisLogo,
		LaucnhImage: Launch,
		footerAboutData: [
			{ item: "Our Company", path: "/about" },
			{ item: "Our Works", path: "/Our-Works" },
			{ item: "Blog", path: "/blog" },
			{ item: "Contact Us", path: "/contact" },
			// { item: 'career', path: '/career' },
		],
		footerIndustriesData: [
			{ item: "E-Commerce App" },
			{ item: "Healthcare App" },
			{ item: "Enterprises applications" },
			{ item: "Movie Server Website" },
			{ item: "UI / UX Designe" },
			{ item: "Camera APP" },
		],
	}
	return (
		<footer className='v2_footer main-footer position-relative'>
			{location.pathname === "/" && (
				<div className='launch-image-wrapper'>
					<Image imgLink={footerData.LaucnhImage} imgAlt='Launch' />
				</div>
			)}
			<Container>
				<Row>
					<Col md='12' lg='4' sm='12'>
						<div className='v2_c-about-element-wrapper mb-md-5'>
							<div className='v2_footer-section-title'>
								<h3> IOTA Infotech Limited</h3>
							</div>
							<div className='v2_footer-menu-element'>{firstBlock}</div>
						</div>
					</Col>
					<Col md='12' lg='2' sm='12'>
						<div className='f_about_section ml-lg-n5 ml-md-n0 mb-md-5'>
							<div className='v2_footer-section-title'>
								<h3>About</h3>
							</div>
							<div className='v2_footer-menu-element'>
								<ul>
									{footerData?.footerAboutData?.map((item, index) => {
										return (
											<li key={index}>
												<Link to={item.path}>{item.item}</Link>
											</li>
										)
									})}
								</ul>
							</div>
						</div>
					</Col>
					{serviceBlock}
					<Col md='12' lg='3' sm='12'>
						<div className='f_folow_section ml-lg-4 ml-md-0'>
							<div className='v2_footer-section-title '>
								<h3>Follow Us</h3>
							</div>
							{footerIconBlock}
							<div className='v2_basis mt-5'>
								<h3>Member of</h3>
								<Anchor
									link='https://basis.org.bd/company-profile/21-02-0003'
									target='_blank'>
									<Image imgLink={BasisLogo} />
								</Anchor>
							</div>
						</div>
					</Col>
				</Row>
				<hr />
				<div className='bootom-footer-copyright-text-wrapper  text-center'>
					<p>
						&copy; Copyright 2021 IOTA Infotech Limited. All Rights Reserved.
					</p>
				</div>
			</Container>
		</footer>
	)
}

const mapStateToProps = (state) => {
	return {
		loading: state.ServiceReducer.loading,
		data: state.ServiceReducer.data,
		// contact info
		contactLoading: state.ContactReducer.loading,
		contactData: state.ContactReducer.data,
	}
}

const mapDispatchToProps = (dispathc) => {
	return {
		service: () => dispathc(serviceData()),
		contact: () => dispathc(getContact()),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(FooterV2)
