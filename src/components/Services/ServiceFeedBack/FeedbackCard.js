import React from "react";

const FeedbackCard = ({ feedback }) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-xl mb-1">
        <div className="card-body">
          <div className="flex content-center ">
            <div className="avatar">
              <div className="w-12 h-12 rounded-full">
                <img src={feedback.img} alt="" />
              </div>
            </div>
            <div className=" mx-4 ">
              <h3 className="font-bold">
                {feedback.name || feedback.userEmail}
              </h3>
              <p className="py-4">{feedback.feedback || feedback.comment}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
