import React, { useEffect, useState } from "react";
import FeedbackCard from "./FeedbackCard";

const ServiceFeedback = () => {
  const [feedbacks, setFeedbacks] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/feedbacks`)
      .then((res) => res.json())
      .then((data) => {
        setFeedbacks(data);
      });
  }, [feedbacks]);

  console.log("feed", feedbacks);

  return (
    <div>
      {feedbacks.map((feedback) => (
        <FeedbackCard key={feedback._id} feedback={feedback}></FeedbackCard>
      ))}
    </div>
  );
};

export default ServiceFeedback;
