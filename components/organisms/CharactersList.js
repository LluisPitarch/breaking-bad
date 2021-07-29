import Styled from 'styled-components';
import Slider from 'react-slick';

import CardCharacter from '../atoms/characters/CardCharacter';

const StyledSlider = Styled(Slider)`
height: calc(100vh - 352px);
display: flex;
align-items: center;
`;

const settings = {
  dots: false,
  infinite: true,
  autoPlay: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2,
  lazyLoad: false,
};

const CharactersList = ({ characters, onClick }) => (
  <div>
    <StyledSlider {...settings}>
      {characters.length &&
        characters.map((char) => (
          <CardCharacter {...char} key={char?.char_id} onClick={onClick} />
        ))}
    </StyledSlider>
  </div>
);
export default CharactersList;
