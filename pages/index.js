import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCharacters } from '../redux/character/characterActions';

import Layout from '../layout/Layout';

import CharactersList from '../components/organisms/CharactersList';

const Home = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.characters);
  const isPending = useSelector((state) => state.characters.isPending);

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <Layout isLoading={isPending}>
      {characters && <CharactersList characters={characters} />}
    </Layout>
  );
};

export default Home;
