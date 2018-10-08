import React from "react";

import Beer from "./Beer";

export default ({ beers }) => (
  <ul className="beer-list">
    {beers.map(beer => (
      <Beer {...beer} key={beer.id} />
    ))}
  </ul>
);
