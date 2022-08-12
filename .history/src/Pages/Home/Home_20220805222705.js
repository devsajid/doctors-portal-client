import React from "react";
import Services from "../Services/Services";
import Terms from "../Terms/Terms";
import Banner from "./Banner/Banner";
import Info from "./Info/Info";

const Home = () => {
  return (
    <div className="px-12">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Terms></Terms>
    </div>
  );
};

export default Home;