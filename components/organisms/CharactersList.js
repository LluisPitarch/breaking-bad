import Styled from 'styled-components';
import Slider from 'react-slick';

import CardCharacter from '../atoms/characters/CardCharacter';
import { useResponsive } from '../../utils/hooks/useResponsive';

const StyledSlider = Styled(Slider)`
height: calc(100vh - 352px);
display: flex;
align-items: center;
min-height: 600px;
`;

const CharactersList = ({ characters, onClick }) => {
  const { isBigScreen, isTablet, isPhone, isSmallDesktop } = useResponsive();

  const switchItems = () => {
    if (isBigScreen) return 4;
    if (isSmallDesktop) return 2;
    if (isTablet) return 1;
    if (isPhone) return 1;
    return 3;
  };

  const settings = {
    dots: false,
    infinite: true,
    autoPlay: true,
    speed: 500,
    slidesToShow: switchItems(),
    slidesToScroll: 2,
    lazyLoad: false,
  };

  return (
    <div>
      <StyledSlider {...settings}>
        {characters.length &&
          characters.map((char) => (
            <CardCharacter {...char} key={char?.char_id} onClick={onClick} />
          ))}
      </StyledSlider>
    </div>
  );
};
export default CharactersList;
