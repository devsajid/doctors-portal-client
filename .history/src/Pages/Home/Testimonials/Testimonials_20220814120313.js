import React from "react";
import quote from "..";
const Testimonials = () => {
  return (
    <section>
      <div
        className="py-10 flex justyfy-between"
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
          <img src="quote" className="w-48" alt="quote" />
        </div>
      </div>

      <div></div>
    </section>
  );
};

export default Testimonials;
