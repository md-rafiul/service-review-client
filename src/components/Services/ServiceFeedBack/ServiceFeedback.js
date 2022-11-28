import React, { useEffect, useState } from "react";

const ServiceFeedback = () => {
  const [feedbacks, setFeedbacks] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/feedbacks`)
      .then((res) => res.json())
      .then((data) => {
        setFeedbacks(data);
      });
  }, []);

  console.log("feed", feedbacks);

  return <div>feed</div>;
};

export default ServiceFeedback;
