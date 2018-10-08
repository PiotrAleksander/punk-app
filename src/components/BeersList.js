import React from "react";

import Beer from "./Beer";

export default ({ beers }) => (
  <div>
    {beers.map(beer => (
      <Beer {...beer} key={beer.id} />
    ))}
  </div>
);
