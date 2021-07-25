import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCharacters } from '../redux/character/characterActions';

import Layout from '../layout/Layout';

const Home = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.characters);
  const isPending = useSelector((state) => state.characters.isPending);

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <Layout isLoading={isPending}>
      {characters &&
        characters.map(({ name, char_id, img }) => (
          <div key={char_id}>{name}</div>
        ))}
    </Layout>
  );
};

export default Home;
