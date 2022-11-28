import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import ReviewCard from "./ReviewCard";
import { Audio } from "react-loader-spinner";

const MyReviews = () => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/feedbacks?userEmail=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setFeedbacks(data);
        setLoading(false);
      });
  }, [user.email, setLoading]);
  if (loading) {
    return (
      <div className="flex justify-center text-center py-60">
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      </div>
    );
  }
  return (
    <div>
      {feedbacks.length === 0 ? (
        <div className="flex justify-center text-center py-60">
          <h3 className="text-4xl">No reviews were added!</h3>
        </div>
      ) : (
        <div className="p-4">
          {feedbacks?.map((feedback) => (
            <ReviewCard key={feedback._id} feedback={feedback}></ReviewCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyReviews;
