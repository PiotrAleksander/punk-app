const FETCH_BEERS = "FETCH_BEERS";
const FETCH_BEERS_COMPLETED = "FETCH_BEERS_COMPLETED";
const FETCH_BEERS_REJECTED = "FETCH_BEERS_REJECTED";
export const SEARCH_BEER = "SEARCH_BEER";
export const SEARCH_CANCELLED = "SEARCH_CANCELLED";

export default (
  state = {
    beers: [],
    term: "",
    loading: false,
    error: false,
    errorMessage: ""
  },
  action
) => {
  switch (action.type) {
    case SEARCH_BEER:
      return {
        ...state,
        beers: [],
        term: action.payload,
        error: false,
        errorMessage: "",
        loading: true
      };
    case SEARCH_CANCELLED:
      return {
        ...state,
        loading: false
      };
    case FETCH_BEERS:
      return {
        ...state,
        loading: true
      };
    case FETCH_BEERS_COMPLETED:
      return {
        ...state,
        beers: action.payload,
        loading: false,
        error: false,
        errorMessage: ""
      };
    case FETCH_BEERS_REJECTED:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export const fetchBeers = term => ({
  type: FETCH_BEERS,
  payload: term
});

export const fetchBeersCompleted = beers => ({
  type: FETCH_BEERS_COMPLETED,
  payload: beers
});

export const fetchBeersRejected = error => ({
  type: FETCH_BEERS_REJECTED,
  payload: error
});

export const searchBeer = term => ({
  type: SEARCH_BEER,
  payload: term
});

export const cancelSearch = () => ({
  type: SEARCH_CANCELLED
});
