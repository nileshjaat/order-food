import { SET_RESTAURANTS, SET_FILTERS } from './constants';

export function setRestaurants(data) {
  return {
    type: SET_RESTAURANTS,
    payload: data,
  };
}

export function setFilters(data) {
  return {
    type: SET_FILTERS,
    payload: data,
  };
}
