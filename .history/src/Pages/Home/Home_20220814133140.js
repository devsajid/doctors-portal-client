import React from "react";
import Services from "../Services/Services";
import Terms from "../Terms/Terms";
import Appoinments from "./Appoinments/Appoinments";
import Banner from "./Banner/Banner";
import Info from "./Info/Info";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="lg:px-12 sm:px-0">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Terms></Terms>
      <Appoinments></Appoinments><Testimonials></Testimonials><C
    </div>
  );
};

export default Home;
