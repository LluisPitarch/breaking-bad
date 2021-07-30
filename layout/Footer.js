import Styled from 'styled-components';

const StyledFooter = Styled.footer`
position: absolute;
bottom: 0;
left: 0;
right: 0;
margin: auto;
width: fit-content;
padding: 20px 0px;
color: white;
letter-spacing: 0.25em;
font-size: 12px;


@media (max-width: 768px) {
    position: relative;
    margin: auto auto 0 auto;
}
`;

const Footer = () => <StyledFooter>Lluis Pitarch | 2021</StyledFooter>;

export default Footer;
