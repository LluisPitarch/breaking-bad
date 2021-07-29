import Link from 'next/link';
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

const NavBar = () => (
  <StyledNavBar>
    <Link href="/">
      <a data-testid="link-home">
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

export default NavBar;
