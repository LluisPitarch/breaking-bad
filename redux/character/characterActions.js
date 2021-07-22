import characterActionTypes from './characterActionTypes';
import { fetchCharacters } from '../../services/charactersServices';

export const getCharacters = () => async (dispatch) => {
  dispatch({
    type: characterActionTypes.GET_CHARACTERS_PENDING,
  });

  try {
    const { characters, status } = await fetchCharacters();

    if (status === 200) {
      dispatch({
        type: characterActionTypes.GET_CHARACTERS,
        payload: characters,
      });
    }
  } catch (error) {
    dispatch({
      type: characterActionTypes.GET_CHARACTERS_ERROR,
      payload: error,
    });
  }
};
