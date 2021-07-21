import Styled from 'styled-components';

import NavBar from './NavBar';
import Footer from './Footer';

const StyledLayout = Styled.div`
min-height: 100vh;
background: linear-gradient(-190deg, rgba(14,19,22,1) 0%, rgba(6,96,35,1) 100%);;
`;

const Layout = ({ children }) => (
  <StyledLayout>
    <NavBar />
    {children}
    <Footer />
  </StyledLayout>
);

export default Layout;
