import React from "react";
import quote from "../../../assets/icons/quote.svg";
const Testimonials = () => {
  return (
    <section>
      <div
        className="py-10"
        style={{
          backgroundImage: `url(${quote})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: 2,
        }}
      >
        <h5 className="text-primary text-lg">Testimonials</h5>
        <h2 className="text-capitalize text-4xl">What are our patients says</h2>
      </div>
      <div></div>
    </section>
  );
};

export default Testimonials;
