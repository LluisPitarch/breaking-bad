import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCharacters } from '../redux/character/characterActions';

import Layout from '../layout/Layout';

const Home = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.characters);

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <Layout>
      {characters ? (
        characters.map(({ name, char_id, img }) => (
          <div key={char_id}>{name}</div>
        ))
      ) : (
        <span>Loading..</span>
      )}
    </Layout>
  );
};

export default Home;
