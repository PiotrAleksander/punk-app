import React from "react";

export default beer => (
  <li>
    <img className="beer-image" src={beer.image_url} alt={`${beer.name}`} />
    <span className="beer-name">{beer.name}</span>
  </li>
);
