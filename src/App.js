import React, { useEffect } from "react";
import "./App.css";
import Layout from "./container/Layout/Layout";
import Router from "../src/Route/Router";
import ReactGA from "react-ga";

function App() {
  ReactGA.initialize("UA-205260137-1");
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <div className="App">
      <Layout>
        <Router />
      </Layout>
    </div>
  );
}

export default App;
