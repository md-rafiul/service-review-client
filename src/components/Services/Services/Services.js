import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const services = useLoaderData();
  //   console.log(services);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      {services.map((service) => (
        <ServiceCard key={services._id} service={service}></ServiceCard>
      ))}
    </div>
  );
};

export default Services;
