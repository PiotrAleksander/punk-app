import React from "react";

export default props => (
  <input
    value={props.term}
    onChange={props.onTermTyped}
    placeholder="Type yer food, mate"
  />
);
