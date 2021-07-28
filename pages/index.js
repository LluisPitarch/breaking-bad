import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { motion } from 'framer-motion';

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
    if (characters.length === 0) {
      dispatch(getCharacters());
    }
  }, []);

  const handleClick = async (id) => {
    await dispatch(getSelectedCharacter(id));
    router.push(`/character-detail/${id}`);
  };

  return (
    <Layout isLoading={isPending}>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        duration={1}>
        {characters.length > 0 && (
          <CharactersList characters={characters} onClick={handleClick} />
        )}
      </motion.div>
    </Layout>
  );
};

export default Home;
