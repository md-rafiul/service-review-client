import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ServiceCard from "../Services/ServiceCard/ServiceCard";

const Home = () => {
  const services = useLoaderData();
  return (
    <div>
      <div className="text-center">
        <div className="carousel h-96 my-3">
          <div
            id="item1"
            className="carousel-item w-full text-center flex justify-center"
          >
            <img src={services[0].serviceImg} alt="" />
          </div>
          <div
            id="item2"
            className="carousel-item w-full text-center flex justify-center"
          >
            <img src={services[1].serviceImg} alt="" />
          </div>
          <div
            id="item3"
            className="carousel-item w-full text-center flex justify-center"
          >
            <img src={services[2].serviceImg} alt="" />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
        </div>
      </div>
      <div className="p-4  ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>

        <div className="text-center">
          <Link to="/services">
            <button className="btn btn-primary">See All</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
