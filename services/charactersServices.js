import axios from 'axios';

export const fetchCharacters = async () => {
  const { status, data } = await axios.get('/api/characters');

  return {
    status,
    characters: data,
  };
};

export const fetchCharacter = async (id) => {
  const { status, data } = await axios.get(`/api/characters/${id}`);

  return {
    status,
    selectedCharacter: data,
  };
};
