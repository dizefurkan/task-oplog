import React from 'react';

import TopCard from './TopCard';
import ExperienceAndEducation from './ExperienceAndEducation';
import SkillsAndEndorsements from './SkillsAndEndorsements';
import Accomplishments from './Accomplishments';
import Interests from './Interests';

import Container from 'src/themes/Container';

import * as S from './style';

const Profile = () => (
  <S.Profile>
    <Container>
      <TopCard />
      <ExperienceAndEducation />
      <SkillsAndEndorsements />
      <Accomplishments />
      <Interests />
    </Container>
  </S.Profile>
);

export default Profile;