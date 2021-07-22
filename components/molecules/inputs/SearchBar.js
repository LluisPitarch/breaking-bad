import Styled from 'styled-components';

const StyledForm = Styled.div`
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

const SearchBar = (props) => {
  return (
    <StyledForm>
      <StyledInput {...props} type="text" />
    </StyledForm>
  );
};

export default SearchBar;
