import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  console.log(service.serviceImg);

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={service.serviceImg} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service.serviceName}</h2>
        <p>{service?.serviceDetails?.details}</p>
        <div className="card-actions justify-end">
          <Link>
            <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
