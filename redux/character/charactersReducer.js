import characterActionTypes from './characterActionTypes';
import { initialState } from './characterInitialState';

export const characterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case characterActionTypes.GET_CHARACTERS_PENDING:
      return {
        isPendingReset: true,
        errorReset: false,
      };

    case characterActionTypes.GET_CHARACTERS_ERROR:
      return {
        isPending: false,
        error: payload,
      };

    case characterActionTypes.GET_CHARACTERS:
      return {
        characters: payload,
        isPending: false,
        error: false,
      };

    default:
      return state;
  }
};
