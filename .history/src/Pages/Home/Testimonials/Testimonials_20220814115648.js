import React from "react";
import quote from "../../../assets/icons/quote.svg";
const Testimonials = () => {
  return (
    <section>
      <div className="py-10">
        <h5 className="text-primary text-lg font-bold">Testimonials</h5>
        <h2 className="text-capitalize text-4xl">What are our patients says</h2>
      </div>
      <div>
        <img src={quote} alt="quote" />
      </div>
      <div></div>
    </section>
  );
};

export default Testimonials;