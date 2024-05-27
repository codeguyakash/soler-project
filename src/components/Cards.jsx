import React, { useState } from "react";

const Cards = ({ props }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <div className="shadow-lg p-10 min-h-64 border rounded-lg">
      <h2 className="text-2xl font-semibold my-2">{props.title}</h2>
      {props.image ? (
        <img
          src={props.image}
          alt={`Image of ${props.title}`}
          width="100%"
          height={200}
          className="rounded"
        />
      ) : (
        ""
      )}

      <p className="text-lg my-2">
        {showFullDescription
          ? props.description
          : props.description.slice(0, 60) + "..."}
        {props.description.length > 50 && (
          <button
            className="text-green-900 font-semibold hover:underline"
            onClick={() => setShowFullDescription(!showFullDescription)}
          >
            {showFullDescription ? "Read Less" : "Read More"}
          </button>
        )}
      </p>
    </div>
  );
};

export default Cards;
