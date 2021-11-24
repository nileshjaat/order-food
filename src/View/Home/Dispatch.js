import { setRestaurants, setFilters } from './actions';

export function setRestaurantsInfo(data) {
  return (dispatch) => {
    dispatch(setRestaurants(data));
  };
}

export function setFiltersInfo(data) {
  return (dispatch) => {
    dispatch(setFilters(data));
  };
}
