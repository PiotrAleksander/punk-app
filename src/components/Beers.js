import React from "react";
import { connect } from "react-redux";

import SearchBox from "./SearchBox";
import BeersList from "./BeersList";
import { searchBeer, cancelSearch } from "../beersReducer";

export const Beers = ({
  beers,
  term,
  loading,
  error,
  errorMessage,
  onTermTyped,
  onCancelClicked
}) => (
  <div>
    <SearchBox term={term} onTermTyped={onTermTyped} />{" "}
    {loading && (
      <button type="button" onClick={onCancelClicked}>
        Cancel
      </button>
    )}
    {error && <div>An error occured: {errorMessage}</div>}
    {term.length > 0 && loading && <div>Loading...</div>}
    {beers.length > 0 && <BeersList beers={beers} />}
  </div>
);

const mapStateToProps = state => ({
  beers: state.beers,
  term: state.term,
  loading: state.loading,
  error: state.error,
  errorMessage: state.errorMessage
});

const mapDispatchToProps = dispatch => ({
  onTermTyped(event) {
    dispatch(searchBeer(event.target.value));
  },
  onCancelClicked() {
    dispatch(cancelSearch());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Beers);
