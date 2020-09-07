import React from "react";
import "./styles/UserReview.css";

const UserReview = () => {
  return (
    <div className="userReview-mainContainer pb-3">
      <div className="card userReview-card">
        <div className="d-flex p-3 ">
          <div className="d-flex flex-column" >
            <img
              src="http://placehold.it/64x64"
              alt="reviewImage"
              className="float-left rounded-circle h-100"
            />
            <h5 className="card-title mt-2">Cliente</h5>
          </div>
          <div className="message ml-2 d-flex align-items-center">
            <h4 class="card-subtitle p-4 text-muted">"¡Sin duda alguna han sido los mejores alfajores que he probado!"</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserReview;
