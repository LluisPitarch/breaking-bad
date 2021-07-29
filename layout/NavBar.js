import Link from 'next/link';
import { useRef } from 'react';
import Image from 'next/image';
import Styled from 'styled-components';
import LanguageSelect from '../components/molecules/LanguageSelect';

const StyledNavBar = Styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1480px;
  padding: 30px 40px;
  position: sticky;
  margin: auto;
  width: 100%;
  align-items: center;
  box-sizing: border-box;
`;

const StyledImage = Styled(Image)`
cursor: pointer;
`;

const NavBar = () => {
  const inputRef = useRef('');

  return (
    <StyledNavBar>
      <Link href={'/'}>
        <a>
          <StyledImage
            src="/img/logo/bbLogo.png"
            alt="Breaking bad characters"
            width="150"
            height="100"
          />
        </a>
      </Link>
      <LanguageSelect />
    </StyledNavBar>
  );
};

export default NavBar;
