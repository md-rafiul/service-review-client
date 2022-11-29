import FeedbackCard from "./FeedbackCard";

const ServiceFeedback = (props) => {
  console.log(Array.isArray(props.feedbacks));
  return (
    <div>
      {props.feedbacks?.map((feedback) => (
        <FeedbackCard key={feedback._id} feedback={feedback}></FeedbackCard>
      ))}
    </div>
  );
};

export default ServiceFeedback;
