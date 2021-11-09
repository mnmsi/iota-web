import React, { useState, useEffect } from 'react'
import { Spinner, Row, Col, Modal } from 'react-bootstrap'
import SingleGallery from './SingleGallery'
import Image from '../../components/UI/Image/Image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import './Gallery.scss'
// import gallery1 from '../../assets/img/gallery/1.jpg';
// import gallery2 from '../../assets/img/gallery/2.jpg';
// import gallery3 from '../../assets/img/gallery/3.jpg';
// import gallery4 from '../../assets/img/gallery/4.jpg';
// import gallery5 from '../../assets/img/gallery/5.jpg';
// import gallery6 from '../../assets/img/gallery/6.jpg';
// import gallery7 from '../../assets/img/gallery/7.jpg';
// import gallery8 from '../../assets/img/gallery/8.jpg';
// import gallery9 from '../../assets/img/gallery/9.jpg';
// import gallery10 from '../../assets/img/gallery/10.jpg';
// import galler11 from '../../assets/img/gallery/11.jpg';
// import gallery12 from '../../assets/img/gallery/12.jpg';
// import gallery13 from '../../assets/img/gallery/13.jpg';
// import gallery14 from '../../assets/img/gallery/14.jpg';
// import gallery15 from '../../assets/img/gallery/15.jpg';
// import gallery16 from '../../assets/img/gallery/16.jpg';
// import gallery17 from '../../assets/img/gallery/17.jpg';
// import gallery18 from '../../assets/img/gallery/18.jpg';
// import gallery19 from '../../assets/img/gallery/19.jpg';
// import gallery20 from '../../assets/img/gallery/20.jpg';
// import gallery21 from '../../assets/img/gallery/21.jpg';
// import gallery22 from '../../assets/img/gallery/22.jpg';
// import gallery23 from '../../assets/img/gallery/23.jpg';
// import gallery24 from '../../assets/img/gallery/24.jpg';
// import gallery25 from '../../assets/img/gallery/25.jpg';
// import gallery26 from '../../assets/img/gallery/26.jpg';
// import gallery27 from '../../assets/img/gallery/27.jpg';
// import gallery28 from '../../assets/img/gallery/28.jpg';
// import gallery30 from '../../assets/img/gallery/30.jpg';
// import gallery31 from '../../assets/img/gallery/31.jpg';
// import gallery32 from '../../assets/img/gallery/32.jpg';
// import gallery33 from '../../assets/img/gallery/33.jpg';
// import gallery34 from '../../assets/img/gallery/34.jpg';
// import gallery35 from '../../assets/img/gallery/35.jpg';
// import gallery36 from '../../assets/img/gallery/36.jpg';
// import gallery37 from '../../assets/img/gallery/37.jpg';
// import gallery38 from '../../assets/img/gallery/38.jpg';
// import gallery39 from '../../assets/img/gallery/39.jpg';
// import gallery40 from '../../assets/img/gallery/40.jpg';

const settings = {
  dots: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoPlaySpeed: 3000,
  speed: 2000,
  autoplaySpeed: 3000,
  draggable: false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
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

const Gallery = (props) => {
  const [imageUrl, setImageUrl] = useState('')
  const [isShow, setIsShow] = useState(false)
  // handle gallery
  const showPopUpImage = (e) => {
    setImageUrl(e.target.src)
    setIsShow(true)
  }
  const handleClose = () => {
    setIsShow(false)
  }
  let galleryBlock = <Spinner animation='border' />
  if (props.galleryData) {
    galleryBlock = (
      <>
        <div className='gallery-wrapper'>
          <Row>
            {props.galleryData.slice(0, 9).map((item, index) => {
              return (
                <Col md={4} className='mb-4' key={index} sm='6' xs='6'>
                  <SingleGallery
                    image={item.src}
                    handleClick={showPopUpImage}
                  />
                </Col>
              )
            })}
          </Row>
          <Row className='justify-content-center'>
            <Col lg='2' sm='2' md='2' className='text-center'>
              <div className='load-more-button'> Load more </div>
            </Col>
          </Row>
          <Modal
            show={isShow}
            onHide={handleClose}
            className='gallery-modal-wrapper'
            aria-labelledby='contained-modal-title-vcenter'
            centered>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <div className='g_i_m'>
                <Image imgLink={imageUrl} imgAlt='modal image' />
              </div>
            </Modal.Body>
          </Modal>
        </div>
        <div className='mobile-gallery-wrapper'>
          <Slider {...settings}>
            {props.galleryData.map((item, index) => {
              return (
                <div class='gallery-image-mobile-slide' key={index}>
                  <SingleGallery
                    image={
                      process.env.REACT_APP_BASE_API_URL + 'storage/' + item.src
                    }
                    handleClick={showPopUpImage}
                    data-aos='fade-up'
                  />
                </div>
              )
            })}
          </Slider>
        </div>
      </>
    )
  }
  return <>{galleryBlock}</>
}

export default Gallery
