import React from 'react';

import TopCard from './TopCard';
import ExperienceAndEducation from './ExperienceAndEducation';
import SkillsAndEndorsements from './SkillsAndEndorsements';
import Accomplishments from './Accomplishments';

import Container from 'src/themes/Container';

const Profile = () => (
  <Container>
    <TopCard />
    <ExperienceAndEducation />
    <SkillsAndEndorsements />
    <Accomplishments />
  </Container>
);

export default Profile;