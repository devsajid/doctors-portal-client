import React from "react";
import appoinment from "../../../assets/images/appointment.png";
const Contactus = () => {
  return (
    <section>
      <div className=" " style={{ background: `url(${appoinment})` }}>
        <h4 className="font-bold text-primary text-xl">Contact Us</h4>
        <h2 className="text-3xl text-capitalize">Stay Connected With Us</h2>
      </div>
      <div></div>
      <div class="flex flex-col w-full">
        <div class="grid h-20 card bg-base-300 rounded-box place-items-center">
          content
        </div>
        <div class="divider"></div>
        <div class="grid h-20 card bg-base-300 rounded-box place-items-center">
          content
        </div>
      </div>
    </section>
  );
};

export default Contactus;