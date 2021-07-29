import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Styled from 'styled-components';

import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Title = Styled.h1`
font-size: 40px;
text-align: center;
margin-top: 100px;
`;

import {
  getCharacters,
  getSelectedCharacter,
} from '../redux/character/characterActions';

import Layout from '../layout/Layout';

import CharactersList from '../components/organisms/CharactersList';

const Home = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const characters = useSelector((state) => state.characters.characters);
  const isPending = useSelector((state) => state.characters.isPending);

  const { t } = useTranslation('app');

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
        <Title id="title">{t('title')}</Title>
        {characters.length > 0 && (
          <CharactersList characters={characters} onClick={handleClick} />
        )}
      </motion.div>
    </Layout>
  );
};

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['app'])),
    },
  };
}

export default Home;
