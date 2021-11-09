import React from "react";
import Header from "../../components/Header/Header";
import FooterV2 from "../../components/Footer/FooterV2";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <main className="main-components-wrapper">{props.children}</main>
      <FooterV2 />
    </div>
  );
};

export default Layout;
