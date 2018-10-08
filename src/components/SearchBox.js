import React from "react";

export default props => (
  <input
    className="search-box"
    value={props.term}
    onChange={props.onTermTyped}
    placeholder="Type yer chow quickly"
  />
);
