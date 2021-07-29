import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useSelector, useDispatch } from 'react-redux';
import Styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { SvgIcon } from '@material-ui/core';
import { getSelectedCharacter } from '../../redux/character/characterActions';

import Layout from '../../layout/Layout';
import CardCharacter from '../../components/atoms/characters/CardCharacter';
import Event from '@material-ui/icons/Event';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import WorkIcon from '@material-ui/icons/Work';
import CameraRollIcon from '@material-ui/icons/CameraRoll';

const DetailContainer = Styled.div`
display: flex;
height: calc(100vh - 221px);
width: 100%;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`;

const Info = Styled.div`
background: #080808;
border: 1px solid #fff;
`;

const FeatureContainer = Styled.span`
display: flex;
align-items: center;
padding: 15px 15px;
border-bottom: 1px solid #fff;
`;

const Title = Styled.span`
font-family: "Cooper";
font-size: 20px;
display: inline-block;
margin: 0 10px;
`;

const TagList = Styled.div`
display: flex;
flex-wrap: wrap;
`;

const Tag = Styled.span`
display: inline-block;
padding: 2px 6px;
margin: 2px 4px;
background-color: #fff;
color: #000;
border-radius: 4px;
`;

const CharacterDetail = () => {
  const character = useSelector((state) => state.characters.selectedCharacter);
  const isPending = useSelector((state) => state.characters.isPending);

  const router = useRouter();
  const { id } = router.query;

  const dispatch = useDispatch();
  const { t } = useTranslation('app');

  useEffect(() => {
    if (!character && id) {
      dispatch(getSelectedCharacter(Math.floor(id)));
    }
  }, [id]);

  return (
    <Layout isLoading={isPending}>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        duration={1}>
        <DetailContainer>
          {character?.birthday && (
            <>
              <CardCharacter {...character} />
              <Info>
                <FeatureContainer>
                  <SvgIcon component={Event} />
                  <Title>{t('birthday')}:</Title>
                  {character.birthday}
                </FeatureContainer>
                <FeatureContainer>
                  <SvgIcon component={AccessibilityIcon} />
                  <Title>{t('stillAlive')}:</Title> {character.status}
                </FeatureContainer>
                <FeatureContainer>
                  <SvgIcon component={WorkIcon} />
                  <Title>{t('occupation')}:</Title>
                  <TagList>
                    {character.occupation.map((i) => (
                      <Tag key={i}>{i}</Tag>
                    ))}
                  </TagList>
                </FeatureContainer>
                <FeatureContainer>
                  <SvgIcon component={CameraRollIcon} />
                  <Title>{t('appearance')}:</Title>
                  <TagList>
                    {character.appearance.map((i) => (
                      <Tag key={i}>{i}</Tag>
                    ))}
                  </TagList>
                </FeatureContainer>
              </Info>
            </>
          )}
        </DetailContainer>
      </motion.div>
    </Layout>
  );
};

export default CharacterDetail;

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['app'])),
    },
  };
}
