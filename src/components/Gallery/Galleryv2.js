import React, { useState, useCallback } from 'react'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { Spinner } from 'react-bootstrap'

const Galleryv2 = (props) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }
  let gallery = <Spinner animation='border' />
  if (props.data != null) {
    let data = []
    let photos = props.data.map((item) => {
      let src = {
        src: process.env.REACT_APP_BASE_API_URL + item.content,
      }
      data.push(src)
    })
    return (
      <>
        <Gallery photos={data} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={data.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </>
    )
  }

  return <div>{gallery}</div>
}

export default Galleryv2
