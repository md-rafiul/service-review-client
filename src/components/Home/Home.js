import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const services = useLoaderData();

  return <div>{services.length}</div>;
};

export default Home;
