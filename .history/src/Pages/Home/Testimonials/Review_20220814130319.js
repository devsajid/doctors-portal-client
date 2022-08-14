import React from "react";

const Review = (review) => {
  return (
    <div>
      <div class="card lg:max-w-lg  shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{}</h2>
          <p>{review}</p>
        </div>
        <div>
          <div class="avatar">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={review.img} alt="avatar" />
            </div>
            <div>
              <h4 className="text-xl">{review.name}</h4>
              <p>{review.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
