import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appoinment from "../../../assets/images/appointment.png";
import PrimaryButton from "../Share/Navbar/PrimaryButton/PrimaryButton";

const Appoinments = () => {
  return (
    <section
      className="flex justify-center items-center"
      style={{ background: `url(${appoinment})` }}
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-100px]" src={doctor} alt="Appoinment doctor"></img>
      </div>
      <div className="flex-1 mb-4 sm:flex-none">
        <h2 className="text-xl text-primary font-bold mt-4">Appoinment</h2>
        <h4 className="text-3xl text-white">Make an appoinment today</h4>
        <p className="text-white mb-5">
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
