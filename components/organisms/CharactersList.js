import Styled from 'styled-components';
import HorizontalScroll from 'react-scroll-horizontal';

import CardCharacter from '../atoms/characters/CardCharacter';

const Grid = Styled.div`
max-width: 100vw;
height: calc(100vh - 212px);
`;

const StyledHorizontalScroll = Styled(HorizontalScroll)`
display: flex;
align-items: center;

div {
display: flex;
align-items: center;
}
`;

const CharactersList = ({ characters, onClick }) => (
  <Grid>
    <StyledHorizontalScroll reverseScroll>
      {characters.map((char) => (
        <CardCharacter {...char} key={char.char_id} onClick={onClick} />
      ))}
    </StyledHorizontalScroll>
  </Grid>
);
export default CharactersList;
