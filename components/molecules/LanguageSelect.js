import { useState } from 'react';
import Styled from 'styled-components';
import Switch from 'react-switch';
import { useRouter } from 'next/router';

const Selector = Styled.div`
display: flex;
align-items: center;
border-radius: 6px;
overflow: hidden;
`;

const Lang = Styled.div`
font-size: 16px;
display: inline-block;
font-weight: bold;
margin: 0 5px;
`;

const LanguageSelect = () => {
  const router = useRouter();
  const { locale, asPath } = useRouter();
  const [activeLanguage, setActiveLanguage] = useState(locale);

  const handleChange = () => {
    if (activeLanguage === 'en') {
      setActiveLanguage('es');
      router.push(asPath, asPath, { locale: 'es' });
      return;
    }
    setActiveLanguage('en');
    router.push(asPath, asPath, { locale: 'en' });
  };

  return (
    <Selector>
      <Lang>EN</Lang>
      <Switch
        onChange={handleChange}
        checked={activeLanguage === 'es'}
        checkedIcon={false}
        onColor="#08582e"
        offColor="#08582e"
        uncheckedIcon={false}
      />
      <Lang>ES</Lang>
    </Selector>
  );
};

export default LanguageSelect;
