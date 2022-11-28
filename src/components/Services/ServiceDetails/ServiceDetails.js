import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ServiceFeedback from "../ServiceFeedBack/ServiceFeedback";

const ServiceDetails = () => {
  const service = useLoaderData();
  return (
    <div className="p-4">
      <div className="card  bg-base-100 shadow-xl mb-4">
        <figure>
          <img src={service.serviceImg} alt="" />
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

      <ServiceFeedback></ServiceFeedback>
    </div>
  );
};

export default ServiceDetails;
