import React from "react";

const InfoCard = ({ img, cardTitle }) => {
  return (
    <div class="card lg:card-side bg-accent shadow-xl">
      <figure className="pl-5">
        <img src={img} alt="Album" />
      </figure>
      <div class="card-body text-white">
        <h2 class="card-title">{New album is released!}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div class="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default InfoCard;
