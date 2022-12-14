import React from "react";
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";
const Banner = () => {
  return (
    <div>
      <div class="hero min-h-screen ">
        <div
          class="hero-content bg-fixed flex-col lg:flex-row-reverse"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p><
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
