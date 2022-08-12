import React from "react";
import Services from "../Services/Services";
import Banner from "./Banner/Banner";
import Info from "./Info/Info";

const Home = () => {
  return (
    <div className="px-1">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
    </div>
  );
};

export default Home;
