import { useRef } from 'react';
import Image from 'next/image';
import Styled from 'styled-components';
import { useDebouncedCallback } from 'use-debounce';

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

const StyledForm = Styled.form`
  position: relative;

  &::before {
    content: '';
    width: 18px;
    height: 18px;
    position: absolute;
    right: 10px;
    margin: auto;
    top: 0;
    bottom: 0;
    z-index: 2;
    background-image: url('/img/icons/search-solid.svg');
  }
`;

const StyledInput = Styled.input`
  border: solid 1px white;
  border-radius: 6px;
  line-height: 32px;
  min-width: 250px;
  background: rgba(255, 255, 255, 0.25);
  position: relative;
  display: inline-block;
  padding-right: 35px;
  color: white;
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

      <StyledForm>
        <StyledInput
          type="text"
          id="search"
          ref={inputRef}
          onChange={handleSearch}
        />
      </StyledForm>
    </StyledNavBar>
  );
};

export default NavBar;
