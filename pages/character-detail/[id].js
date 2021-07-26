import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useSelector, useDispatch } from 'react-redux';
import Styled from 'styled-components';
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

  useEffect(() => {
    if (!character && id) {
      console.log(id);
      dispatch(getSelectedCharacter(Math.floor(id)));
    }
  }, [character]);

  return (
    <Layout isLoading={isPending}>
      <DetailContainer>
        {character?.birthday && (
          <>
            <CardCharacter {...character} />
            <Info>
              <FeatureContainer>
                <SvgIcon component={Event} />
                <Title>Birthday:</Title>
                {character.birthday}
              </FeatureContainer>
              <FeatureContainer>
                <SvgIcon component={AccessibilityIcon} />
                <Title>Still Alive?:</Title> {character.status}
              </FeatureContainer>
              <FeatureContainer>
                <SvgIcon component={WorkIcon} />
                <Title>Occupation:</Title>
                <TagList>
                  {character.occupation.map((i) => (
                    <Tag key={i}>{i}</Tag>
                  ))}
                </TagList>
              </FeatureContainer>
              <FeatureContainer>
                <SvgIcon component={CameraRollIcon} />
                <Title>Appearance:</Title>
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
    </Layout>
  );
};

export default CharacterDetail;
