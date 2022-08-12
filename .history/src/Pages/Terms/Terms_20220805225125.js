import React from "react";
import treatment from "../../assets/images/treatment.png";
import PrimaryButton from "../Home/Share/Navbar/PrimaryButton/PrimaryButton";
const Terms = () => {
  return (
    <div class="hero">
      <div class="hero-content pl-30 flex-col lg:flex-row pl-96">
        <img
          src={treatment}
          class="max-w-sm rounded-lg shadow-2xl"
          alt="treatmaent"
        />
        <div>
          <h1 class="text-5xl font-bold">Box Office News!</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut
            assumenda excepturi exercitationem quasi. In deleniti eaque aut
            repudiandae et a id nisi.
          </p>
          <PrimaryButton></PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Terms;
