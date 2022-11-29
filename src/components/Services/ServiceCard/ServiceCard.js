import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={service?.serviceImg} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service.serviceName}</h2>
        <p className=" font-bold">Price: $ {service?.price}</p>
        <p>{service?.serviceDetails}</p>
        <div className="card-actions justify-end">
          <Link to={`/services/${service._id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
