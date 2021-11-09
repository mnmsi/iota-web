import React, { useEffect, useState } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'
import { useInView } from 'react-intersection-observer'
import './Works.scss'
import { connect } from 'react-redux'
import * as Actions from '../../../Redux/Actions'
// eslint-disable-next-line
import WorkComponents from '../../../components/Work-v2/WorkComponents'
import breadCrumbVideo from '../../../assets/video/workstation.mp4'
// clinets  image
const Works = (props) => {
  // infinty scroll functionality
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  })

  const [pageCount, setPageCount] = useState(1)
  const [works, setWorks] = useState([])
  useEffect(() => {
    window.scroll({ top: 0 })
    if (!props.allWorkData) {
      props.getWork(pageCount)
    }
  }, [])
  useEffect(() => {
    if (
      props.allWorkData?.meta?.current_page !==
      props.allWorkData?.meta?.last_page
    ) {
      props.getWork(pageCount + 1)
      setPageCount(pageCount + 1)
    }
  }, [inView])
  useEffect(() => {
    if (props.allWorkData != null) {
      setWorks((prevArray) =>
        prevArray != null
          ? [...prevArray, ...props.allWorkData?.data]
          : props.allWorkData?.data
      )
    }
  }, [props.allWorkData])
  const breadCrumbData = {
    title: 'our work',
    video: breadCrumbVideo,
  }
  let workBlock = <Spinner animation='border' />
  if (props.allWorkData != null) {
    workBlock = (
      <>
        <WorkComponents data={works} />
      </>
    )
  }
  return (
    <div className='work-page-wrapper pb-10'>
      <Breadcrumb
        video={breadCrumbData.video}
        BreadcrumbTitle={breadCrumbData.title}
      />
      <Container>
        {workBlock}
        <div ref={ref}></div>
      </Container>
    </div>
  )
}
const mapeStateToProps = (state) => {
  return {
    loading: state.workReducer.loading,
    allWorkData: state.workReducer.works,
  }
}
const mapDispathcToProps = (dispathc) => {
  return {
    getWork: (page) => dispathc(Actions.getAllWork(page)),
  }
}
export default connect(mapeStateToProps, mapDispathcToProps)(Works)
