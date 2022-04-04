import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "./banner";
import Option from "./option";

const Home = () => {

  
  return (
    <section className="container-banner">
      <Banner show={"none"}/>
      <Option />
      </section>
  );
};

export default Home;
