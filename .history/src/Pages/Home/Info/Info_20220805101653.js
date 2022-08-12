import React from "react";
import InfoCard from "../Info/InfoCard";
import clock from "../../../assets/icons/clock.svg";
const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:">
      <InfoCard img={clock}></InfoCard>
    </div>
  );
};

export default Info;
