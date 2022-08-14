import React from "react";
import quote from "../../../assets/icons/quote.svg";

import people from "../../../assets/images/people1.png"
const Testimonials = () => {
  const reviews = [{ _id: 1, name: "Winson Harry", review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content", img: }];
  return (
    <section className="my-28">
      <div
        className=" flex  "
        style={{ justifyContent: "space-between" }}
        // style={{
        //   backgroundImage: `url(${quote})`,
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: 100,
        //   backgroundAttachment: "fixed",
        //   backgroundPosition: "right",
        // }}
      >
        <div>
          <h5 className="text-primary text-lg font-bold">Testimonials</h5>
          <h2 className="text-capitalize text-4xl">
            What are our patients says
          </h2>
        </div>
        <div>
          <img src={quote} className="w-24 lg:w-48" alt="quote" />
        </div>
      </div>

      <div></div>
    </section>
  );
};

export default Testimonials;
