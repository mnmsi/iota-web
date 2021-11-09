import React from 'react'
import './Map.scss'
const Map = (props) => {
  const MAP_API_KEY = 'AIzaSyCOZEebF4FgCXAoAeAZEnjk1I_h0p_TVGY'
  let _url = `https://www.google.com/maps/embed/v1/place?key=${MAP_API_KEY}&q=${props.lat},${props.lon}!SIOTA%20INFOTECH%20LIMITED!`
  return (
    <div className='map-wrapper'>
      <iframe
        title='map'
        // src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.5643634456137!2d90.41589441433993!3d23.834085391492632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c72c3430d57f%3A0x3b01d75ab4ab8f74!2sIOTA%20INFOTECH%20LIMITED!5e0!3m2!1sen!2sbd!4v1634655951407!5m2!1sen!2sbd'
        src={_url}
        width='100%'
        height='350'
        allowFullScreen=''
        loading='lazy'></iframe>
    </div>
  )
}

export default Map
