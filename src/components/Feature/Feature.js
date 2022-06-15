import React from "react";
import "./Feature.css";

const Feature = (props) => {
  const { title, author, date, body, image } = props.feature;
  return (
    <div className="feature">
      <div className="feature-image">
        <img src={image} alt={title} />
      </div>
      <div className="feature-details">
        <h2>{title}</h2>
        <p>
          by <span className="author">{author}</span> |{" "}
          <span className="date">{date}</span>
        </p>
        <p className="body">{body}</p>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default Feature;
