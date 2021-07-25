import { useRef } from 'react';
import Image from 'next/image';
import Styled from 'styled-components';
import { useDebouncedCallback } from 'use-debounce';
import SearchBar from '../components/molecules/inputs/SearchBar';

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

const NavBar = () => {
  const inputRef = useRef('');

  const handleSearch = useDebouncedCallback(() => {
    // Todo -> handle Search
  }, 250);

  return (
    <StyledNavBar>
      <Image
        src="/img/logo/bbLogo.png"
        alt="Breaking bad characters"
        width="150"
        height="100"
      />

      <SearchBar onChange={handleSearch} ref={inputRef} />
    </StyledNavBar>
  );
};

export default NavBar;
