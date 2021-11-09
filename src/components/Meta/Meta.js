import React from "react";
import { Helmet } from "react-helmet";

const Meta = (props) => {
  return (
    <>
      <Helmet>
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta
          property="og:image"
          content={"https://iotait.tech" + props.image}
        />
        <meta property="og:url" content={window.location.href} />
        <meta
          name="twitter:card"
          content={"https://iotait.tech" + props.image}
        />

        <meta name="twitter:image:alt" content={props.alt} />

        <meta property="fb:app_id" content={props.fbId} />
        <meta name="twitter:site" content={props.userName} />
      </Helmet>
    </>
  );
};

export default Meta;
