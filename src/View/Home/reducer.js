import { SET_RESTAURANTS, SET_FILTERS } from './constants';

const initialState = {
  restaurantsItems: [],

  filterItems: {
    Cuisine: [],
    Dietary: [],
    Rating: [],
  },
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESTAURANTS:
      return {
        ...state,
        restaurantsItems: action.payload,
      };

    case SET_FILTERS:
      return {
        ...state,
        filterItems: action.payload,
      };

    default:
      return state;
  }
};

export default HomeReducer;
