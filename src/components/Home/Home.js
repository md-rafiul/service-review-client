import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div>
      <div className="carousel w-2/4  ">
        <div id="item1" className="carousel-item w-full">
          <img src={services[0].serviceImg} className="w-full" alt="" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={services[1].serviceImg} className="w-full" alt="" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={services[2].serviceImg} className="w-full" alt="" />
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
      <Link to="/services">
        <button className="btn btn-primary">See All</button>
      </Link>
    </div>
  );
};

export default Home;
