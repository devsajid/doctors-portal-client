import React from "react";
import doctor from "../../../assets/images/doctor";
const Appoinments = () => {
  return (
    <section>
      <div>
        <img src={doctor} alt="Appoinment doctor"></img>/
      </div>
      <div>
        <h2>Appoinment</h2>
        <h4>Make an appo</h4>
      </div>
    </section>
  );
};

export default Appoinments;