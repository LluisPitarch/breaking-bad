import characterActionTypes from './characterActionTypes';
import { initialState } from './characterInitialState';

export const characterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case characterActionTypes.GET_CHARACTERS_PENDING:
      return {
        isPendingReset: true,
        errorReset: false,
      };

    default:
      return state;
  }
};
