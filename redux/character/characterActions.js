import axios from 'axios';

import characterActionTypes from './characterActionTypes';

export const getCharacters = () => async (dispatch) => {
  dispatch({
    type: characterActionTypes.GET_CHARACTERS_PENDING,
  });

  try {
    const res = await axios.get('', {
      email,
    });

    if (res.status === 200) {
      dispatch({
        type: characterActionTypes.GET_CHARACTERS,
        payload: res.data,
      });
    }
  } catch (error) {
    dispatch({
      type: characterActionTypes.GET_CHARACTERS_ERROR,
      payload: error,
    });
  }
};
