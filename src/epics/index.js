import { ajax } from "rxjs/ajax";
import {
  mergeMap,
  map,
  catchError,
  filter,
  takeUntil,
  debounceTime
} from "rxjs/operators";
import { combineEpics, ofType } from "redux-observable";

import {
  SEARCH_BEERS,
  SEARCH_CANCELLED,
  fetchBeersCompleted,
  fetchBeersRejected
} from "../beersReducer";

export const searchBeersEpic = action$ =>
  action$.pipe(
    ofType(SEARCH_BEERS),
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
