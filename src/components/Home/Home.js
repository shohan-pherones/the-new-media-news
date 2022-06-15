import React, { useEffect, useState } from "react";
import Feature from "../Feature/Feature";
import "./Home.css";

const Home = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("./features.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);

  return (
    <div className="home">
      <h1>Featured News</h1>
      <div className="features-wrapper">
        {features.map((feature) => (
          <Feature feature={feature} key={feature.id}></Feature>
        ))}
      </div>
    </div>
  );
};

export default Home;
