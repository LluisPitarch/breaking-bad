import characterActionTypes from './characterActionTypes';
import { initialState } from './characterInitialState';

export const characterReducer = (state = initialState, { type, payload }) => {
  const reducerTypes = {
    [characterActionTypes.GET_CHARACTERS_PENDING]: {
      isPendingReset: true,
      errorReset: false,
    },

    [characterActionTypes.GET_CHARACTERS_ERROR]: {
      isPending: false,
      error: payload,
    },

    [characterActionTypes.GET_CHARACTERS]: {
      characters: payload,
      isPending: false,
      error: false,
    },
  };

  return reducerTypes[type] || state;
};
