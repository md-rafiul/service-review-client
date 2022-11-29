import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { PhotoProvider, PhotoView } from "react-photo-view";
import FeedbackCard from "../ServiceFeedBack/FeedbackCard";
import { Audio } from "react-loader-spinner";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { user, loading, setLoading } = useContext(AuthContext);
  const [feedbacks, setFeedbacks] = useState([]);

  const handleComment = (event) => {
    event.preventDefault();
    const form = event.target;
    const comment = form.comment.value;

    const commentData = {
      comment,
      name: user.displayName,
      productId: service._id,
      userEmail: user.email,
    };
    fetch("https://service-review-server-assignment-11.vercel.app/feedbacks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(commentData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setLoading(false);
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };
  useEffect(() => {
    fetch(
      `https://service-review-server-assignment-11-md-rafiul.vercel.app/feedbacks-all?productId=${service._id}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem(
            "review-assignment-11"
          )} ${user?.userEmail}`,
          params: service._id,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setFeedbacks(data);
        setLoading(false);
      });
  }, [service._id, user?.userEmail, setLoading, handleComment]);
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
    <div className="p-4">
      <div className="card  bg-base-100 shadow-xl mb-4">
        <figure>
          <PhotoProvider>
            <PhotoView src={service?.serviceImg}>
              <img src={service?.serviceImg} alt="" />
            </PhotoView>
          </PhotoProvider>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{service.serviceName}</h2>
          <p className=" font-bold">Price: $ {service?.price}</p>
          <p>{service?.serviceDetails}</p>

          <div className="card-actions justify-end">
            <Link to={``}>
              <button className="btn btn-primary">Order Now</button>
            </Link>
          </div>
        </div>
      </div>
      {user?.uid ? (
        <>
          <form onSubmit={handleComment} className="mb-4">
            <div className="card  bg-base-100 shadow-xl">
              <div className="card-body items-center ">
                <textarea
                  className="textarea textarea-bordered w-full mb-4"
                  placeholder="Type your comment"
                  name="comment"
                ></textarea>
                <div className="card-actions">
                  <button type="submit" className="btn btn-primary">
                    Comment
                  </button>
                </div>
              </div>
            </div>
          </form>
        </>
      ) : (
        <>
          <div className="card  bg-base-100 shadow-xl mb-4">
            <div className="card-body items-center text-center">
              <h2 className="card-title p-6">Please Log In to add comment!</h2>
              <div className="card-actions">
                <Link to="/login">
                  <button className="btn btn-primary">Log In</button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
      {feedbacks?.map((feedback) => (
        <FeedbackCard key={feedback._id} feedback={feedback}></FeedbackCard>
      ))}
    </div>
  );
};

export default ServiceDetails;
