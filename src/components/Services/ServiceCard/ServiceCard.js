import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  console.log(service.serviceImg);

  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={service.serviceImg} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service.serviceName}</h2>
        <p>{service?.serviceDetails?.details}</p>
        <p className=" font-bold">Price: $ {service?.price}</p>
        <div className="card-actions justify-end">
          <Link>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
