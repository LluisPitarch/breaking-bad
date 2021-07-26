import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import {
  getCharacters,
  getSelectedCharacter,
} from '../redux/character/characterActions';

import Layout from '../layout/Layout';

import CharactersList from '../components/organisms/CharactersList';

const Home = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const characters = useSelector((state) => state.characters.characters);
  const isPending = useSelector((state) => state.characters.isPending);

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  const handleClick = async (id) => {
    await dispatch(getSelectedCharacter(id));
    router.push(`/character-detail/${id}`);
  };

  return (
    <Layout isLoading={isPending}>
      {characters && (
        <CharactersList characters={characters} onClick={handleClick} />
      )}
    </Layout>
  );
};

export default Home;
