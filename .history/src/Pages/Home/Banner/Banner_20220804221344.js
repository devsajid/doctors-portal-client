import React from "react";
import chair from "../../../assets/images/chair.png";
// import bg from "../../../assets/images/bg.png";
const Banner = () => {
  return (
    <div>
      <div class="hero min-h-screen " style={{ backgroundImage: { b g} }}>
        <div class="hero-content bg-fixed px-12 flex-col lg:flex-row-reverse">
          <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
