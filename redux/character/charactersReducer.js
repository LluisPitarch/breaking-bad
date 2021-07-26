import characterActionTypes from './characterActionTypes';
import { initialState } from './characterInitialState';

export const characterReducer = (state = initialState, { type, payload }) => {
  const reducerTypes = {
    [characterActionTypes.GET_CHARACTERS_PENDING]: {
      ...state,
      isPending: true,
      error: false,
    },

    [characterActionTypes.GET_CHARACTERS_ERROR]: {
      ...state,
      isPending: false,
      error: payload,
    },

    [characterActionTypes.GET_CHARACTERS]: {
      ...state,
      characters: payload,
      isPending: false,
      error: false,
    },

    [characterActionTypes.GET_SELECTED_CHARACTER]: {
      ...state,
      selectedCharacter: payload,
      isPending: false,
      error: false,
    },
  };

  return reducerTypes[type] || state;
};
