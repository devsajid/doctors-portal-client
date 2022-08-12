import React from "react";
import InfoCard from "../Info/InfoCard";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <InfoCard cardTitle="Openning Ours" img={marker}></InfoCard>
      <InfoCard cardTitle="O" img={clock}></InfoCard>
      <InfoCard cardTitle="Openning Ours" img={phone}></InfoCard>
    </div>
  );
};

export default Info;