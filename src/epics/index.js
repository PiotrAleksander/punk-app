import { ajax } from "rxjs/ajax";
import {
  mergeMap,
  map,
  catchError,
  filter,
  takeUntil,
  debounceTime
} from "rxjs/operators";
import { combineEpics } from "redux-observable";

import {
  SEARCH_BEER,
  SEARCH_CANCELLED,
  fetchBeersCompleted,
  fetchBeersRejected
} from "../beersReducer";

const searchBeersEpic = action$ =>
  action$.ofType(SEARCH_BEER).pipe(
    debounceTime(250),
    filter(({ payload }) => payload.length > 0),
    mergeMap(({ payload }) =>
      ajax
        .get(
          `https://api.punkapi.com/v2/beers?food=${payload.replace(/ /g, "_")}`
        )
        .pipe(
          takeUntil(action$.ofType(SEARCH_CANCELLED)),
          map(data => fetchBeersCompleted(data.response)),
          catchError(error => fetchBeersRejected(error))
        )
    )
  );

export default combineEpics(searchBeersEpic);
