import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import ReviewCard from "./ReviewCard";
import { Audio } from "react-loader-spinner";

const MyReviews = () => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch(
      `https://service-review-server-assignment-11.vercel.app/feedbacks?userEmail=${user.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem(
            "review-assignment-11"
          )}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setFeedbacks(data);
        setLoading(false);
      });
  }, [user?.email, setLoading]);
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
  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure you want to remove this item???"
    );
    if (proceed) {
      fetch(
        `https://service-review-server-assignment-11.vercel.app/feedbacks/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("delete successfully");
            const remaining = feedbacks.filter((feed) => feed._id !== id);
            setFeedbacks(remaining);
          }
        });
    }
  };
  const handleStatUpdate = ({ id }, event) => {
    // event.preventDefault();

    const comment = event.form;
    console.log(comment);
  };
  return (
    <div>
      {feedbacks.length === 0 ? (
        <div className="flex justify-center text-center py-60">
          <h3 className="text-4xl">No reviews were added!</h3>
        </div>
      ) : (
        <div className="p-4">
          {feedbacks?.map((feedback) => (
            <ReviewCard
              key={feedback._id}
              feedback={feedback}
              handleDelete={handleDelete}
              handleStatUpdate={handleStatUpdate}
            ></ReviewCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyReviews;
