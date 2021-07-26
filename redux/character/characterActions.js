import characterActionTypes from './characterActionTypes';
import {
  fetchCharacters,
  fetchCharacter,
} from '../../services/charactersServices';

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

export const getSelectedCharacter = (id) => async (dispatch) => {
  dispatch({
    type: characterActionTypes.GET_CHARACTERS_PENDING,
  });

  try {
    const { selectedCharacter, status } = await fetchCharacter(id);

    if (status === 200) {
      dispatch({
        type: characterActionTypes.GET_SELECTED_CHARACTER,
        payload: selectedCharacter[0],
      });
    }
  } catch (error) {
    dispatch({
      type: characterActionTypes.GET_CHARACTERS_ERROR,
      payload: error,
    });
  }
};
