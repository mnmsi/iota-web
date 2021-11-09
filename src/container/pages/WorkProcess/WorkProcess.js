import React, { useEffect } from 'react'
import WorkProcessCard from '../../../components/WorkProcessCard/WorkProcessCard'
import Image from '../../../components/UI/Image/Image'
// work process image
import workProcess1 from '../../../assets/img/workProcess/1.png'
import workProcess2 from '../../../assets/img/workProcess/2.svg'
import workProcess3 from '../../../assets/img/workProcess/3.png'
import workProcess4 from '../../../assets/img/workProcess/4.png'
import workProcess5 from '../../../assets/img/workProcess/5.png'
import workProcess6 from '../../../assets/img/workProcess/6.png'
// social icon
import skype from '../../../assets/img/contact-flow/skype.png'
import c from '../../../assets/img/contact-flow/c.png'
import whatsup from '../../../assets/img/contact-flow/whatsup.png'
import './WorkProcess.scss'
import Formv2 from '../../../components/Form/Formv2'
const WorkProcess = (props) => {
  useEffect(() => {
    window.scroll({ top: 0 })
  })
  // social icon
  const contactFollow = [
    {
      link: 'https://api.whatsapp.com/send?phone=8801738943602',
      socialLogo: whatsup,
    },
    { link: 'skype:live:.cid.980e0dc6b904e081', socialLogo: skype },
    { link: 'https://calendly.com/meetiotait', socialLogo: c },
  ]

  let socialBlock = ''
  if (contactFollow) {
    socialBlock = contactFollow.map((item, index) => {
      return (
        <div key={index} className='single-social-flow-icon'>
          <a href={`${item.link}`}>
            <Image imgLink={item.socialLogo} imgAlt={item.socialLogo} />
          </a>
        </div>
      )
    })
  }
  const data = [
    {
      title: 'REQUIREMENT GATHERING',
      content:
        'Our development cycle starts with having a collaboration with the customer to plainly comprehend the necessities. We give the most extreme significance to documentation of exact necessities of the customer.',
      listItem: [
        {
          item: 'Interact with client',
        },
        {
          item: 'Understand project goals',
        },
        {
          item: 'Conceptualizing the Idea',
        },
        {
          item: 'Set benchmark',
        },
      ],
      image: workProcess1,
    },
    {
      title: 'ANALYSIS AND PROTOTYPING',
      content:
        'Our expert investigates the assembled prerequisites to obviously comprehend the specific client necessities and to get rid of any ambiguities, deficiency and irregularities from the underlying client impression of the issue.',
      listItem: [
        {
          item: 'Determine the feasibility',
        },
        {
          item: 'Prepare a prototype model',
        },
        {
          item: 'Submit a detailed Proposal',
        },
        {
          item: 'Estimate of time, cost & duration',
        },
        {
          item: 'Deadlines of various',
        },
      ],
      image: workProcess2,
    },
    {
      title: 'DESIGN | UI/UX',
      content:
        'In this stage, we change the site prerequisite particular report into the plan archive. We would plan various modules in the arrangement as capacities and information, characterize control relationships and interfaces among modules and information designs of the singular module',
      listItem: [
        {
          item: 'Use of latest & relevant UI design',
        },
        {
          item: 'Emotional design & colors',
        },
        {
          item: 'UX personalization',
        },
      ],
      image: workProcess3,
    },
    {
      title: 'DEVELOPMENT AND IMPLEMENTATION',
      content:
        'In this stage, the real coding of the plan report is performed. Front end and back end coding is done, data set is associated and the different calculations are executed with least existence intricacies.',
      listItem: [
        {
          item: 'Speed Analysis',
        },
        {
          item: 'Error Prevention ',
        },
        {
          item: 'UX personalization',
        },
      ],
      image: workProcess4,
    },
    {
      title: 'TESTING & QUALITY ASSURANCE',
      content:
        'Testing is done to approve a completely created framework to guarantee that it meets its necessities. The experiments are exclusively planned dependent on the SRS record.',
      listItem: [
        {
          item: 'Bug Elimination',
        },
        {
          item: 'Static & Automated tests',
        },
        {
          item: 'Gather feedback',
        },
      ],
      image: workProcess5,
    },
    {
      title: 'DEPLOYMENT AND LAUNCH',
      content:
        'Presently begins the genuine article, you get the chance to see your site being rejuvenated in your are.',
      listItem: [
        {
          item: 'Introduce the features',
        },
        {
          item: 'Explain working process',
        },
        {
          item: 'Install database on your system',
        },
        {
          item: 'Get approval',
        },
        {
          item: 'Upload to client web server',
        },
      ],
      image: workProcess6,
    },
  ]
  return (
    <div className='work-process-container'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-11 col-lg-11'>
            <WorkProcessCard data={data} />
            <div className='workprocess-page-form-data'>
              <Formv2>
                <div className='work-process-page-content'>
                  <div className='form-content-header'>
                    <h2>Let's Discuss</h2>
                  </div>
                  <div className='form-content-data'>
                    <p>About Your Project,</p>
                    <p>Book Your Free Call With</p>
                    <p>Our Conultant Now!</p>
                  </div>
                  <div className='form-social-button-wrapper d-none'>
                    {socialBlock}
                  </div>
                </div>
              </Formv2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkProcess
