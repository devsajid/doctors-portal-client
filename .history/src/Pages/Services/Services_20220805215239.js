import React from "react";
import flouride from "../../assets/images/flouride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import Service from "./Service";
const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Flouride Treatment",
      description: "fdgghgfh sadshdshfdsf dshfasdgsad",
      img: flouride,
    },
    {
      _id: 2,
      name: "Flouride Treatment",
      description: "fdgghgfh sadshdshfdsf dshfasdgsad",
      img: cavity,
    },
    {
      _id: 3,
      name: "Flouride Treatment",
      description: "fdgghgfh sadshdshfdsf dshfasdgsad",
      img: whitening,
    },
  ];
  return (
    <div className="my-28">
      <div className="text-center">
        <h3 className="text-primary text-xl font-bold upparecase">
          Our Services
        </h3>
        <h1 className="text-4xl">Services we provide</h1>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 ">
        {" "}
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
