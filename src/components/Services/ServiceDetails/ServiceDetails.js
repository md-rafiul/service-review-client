import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { PhotoProvider, PhotoView } from "react-photo-view";
// import ServiceFeedback from "../ServiceFeedBack/ServiceFeedback";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);

  const service = useLoaderData();

  const handleComment = (event) => {
    event.preventDefault();
  };
  return (
    <div className="p-4">
      <div className="card  bg-base-100 shadow-xl mb-4">
        <figure>
          <PhotoProvider>
            <PhotoView src={service.serviceImg}>
              <img src={service.serviceImg} alt="" />
            </PhotoView>
          </PhotoProvider>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{service.serviceName}</h2>
          <p className=" font-bold">Price: $ {service?.price}</p>
          <p>{service?.serviceDetails?.details}</p>
          <p className=" font-bold ">Ingredients: </p>

          <ul className="mx-6">
            {service?.serviceDetails?.ingredients.map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </ul>

          <div className="card-actions justify-end">
            <Link to={`/checkout`}>
              <button className="btn btn-primary">Order Now</button>
            </Link>
          </div>
        </div>
      </div>
      {user?.uid ? (
        <>
          <form onSubmit={handleComment}>
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
          <div className="card  bg-base-100 shadow-xl">
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

      {/* <ServiceFeedback></ServiceFeedback> */}
    </div>
  );
};

export default ServiceDetails;
