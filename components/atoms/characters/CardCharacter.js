import Image from 'next/image';

import Styled from 'styled-components';

const Container = Styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content:center;
min-width: 370px;
height: fit-content;
cursor: pointer;
`;

const StyledImage = Styled(Image)`
background: ${(props) => `url(${props.image})`};
background-size: cover;
-webkit-user-drag: none;
-khtml-user-drag: none;
-moz-user-drag: none;
-o-user-drag: none;
user-drag: none;
`;

const Name = Styled.span`
display: block;
font-family: "Cooper";
width: 100%;
text-align: center;
font-size: 22px;
margin-top: 20px;
letter-spacing: 1px;
`;

const Nickname = Styled.span`
display: block;
color: white;
text-align: center;
font-size: 12px;
background: rgba(0,0,0,0.86);
background-blend-mode: multiply;
padding: 4px 12px;
margin-top: 10px;
letter-spacing: 2px;
`;

const ChardCharacter = ({ name, char_id, img, nickname, onClick }) => {
  const handleClick = async () => {
    onClick(char_id);
  };

  return (
    <Container onClick={handleClick}>
      <StyledImage
        src="/img/frame-1.png"
        width="300"
        height="460"
        image={img}
      />
      <Name>{name}</Name>
      <Nickname>{nickname}</Nickname>
    </Container>
  );
};

export default ChardCharacter;
