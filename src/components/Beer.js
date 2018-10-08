import React from "react";

export default beer => (
  <>
    <div>{beer.name}</div>
    <img src={beer.image_url} alt={`${beer.name}`} />
  </>
);
