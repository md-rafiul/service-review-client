import FeedbackCard from "./FeedbackCard";

const ServiceFeedback = ({ feedbacks }) => {
  return (
    <div>
      {feedbacks?.map((feedback) => (
        <FeedbackCard key={feedback._id} feedback={feedback}></FeedbackCard>
      ))}
    </div>
  );
};

export default ServiceFeedback;
