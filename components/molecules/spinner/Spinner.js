import Styled from 'styled-components';
import Image from 'next/image';

const Backdrop = Styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
 `;

const Spinner = () => (
  <Backdrop>
    <Image src="/img/spinner.gif" width="100" height="100" />
  </Backdrop>
);

export default Spinner;
