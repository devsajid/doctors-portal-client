import React from "react";
import doctor from "../../../assets/images/doctor";
import appoinment from "../../../assets/images/appoinment";
import PrimaryButton from "../Share/Navbar/PrimaryButton/PrimaryButton";

const Appoinments = () => {
  return (
    <section style={{ background: `url(${appoinment})` }}>
      <div>
        <img src={doctor} alt="Appoinment doctor"></img>/
      </div>
      <div className="FLEX">
        <h2>Appoinment</h2>
        <h4>Make an appoinment today</h4>
        <p>
          Lorem ipsuVelit qui eu sunt aliquip commodo quis sint fugiat veniam
          veniam nisi consequat id. Anim adipisicing ea eiusmod proident amet
          nulla aliqua et do. Quis ea anim culpa ipsum. Labore irure et nostrud
          aute sint do reprehenderit nulla cupidatat anim irure anim. Commodo
          occaecat incididunt labore nisi non laboris dolore qui dolore.
        </p>
        <PrimaryButton></PrimaryButton>
      </div>
    </section>
  );
};

export default Appoinments;
