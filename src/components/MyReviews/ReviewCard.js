import React from "react";

const ReviewCard = ({ feedback }) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-xl mb-1">
        <div className="card-body">
          <div className="flex content-center ">
            <div className=" mx-4 grow ">
              <h3 className="font-bold">
                Service Name: {feedback.product.serviceName}
              </h3>
              <p className="py-4">
                Review: {feedback.feedback || feedback.comment}
              </p>
            </div>
            <div className="">
              <button className="btn btn-primary my-2  w-24">Edit</button>
              <br />
              <button className="btn btn-error w-24 ">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
