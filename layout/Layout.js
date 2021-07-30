import Styled from 'styled-components';

import NavBar from './NavBar';
import Footer from './Footer';
import Loader from '../components/molecules/Spinner';

const StyledLayout = Styled.div`
  min-height: 100vh;
  background: linear-gradient(0deg, rgba(14,19,22,1) 0%, rgba(6,70,35,1) 100%), url(/img/bg.jpg) repeat ;
  background-size: cover;
  background-blend-mode: color;
  height: fit-content;

&::before { 
  content: "";
  width: 100%;
  height: 450px;
  position: absolute;
  left: 0;
  top: 0;
  background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4)100%);
  background-size: cover;
  background-blend-mode: multiply;
}
`;

const PageContainer = Styled.div`
  max-width: 1480px;
  padding: 0px 40px;
  margin: 0 auto;
`;

const Layout = ({ children, isLoading = false }) => (
  <>
    {isLoading && <Loader />}
    <StyledLayout>
      <NavBar />
      <PageContainer>{children}</PageContainer>
      <Footer />
    </StyledLayout>
  </>
);

export default Layout;
