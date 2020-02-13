import React from 'react';

import TopCard from './TopCard';
import ExperienceAndEducation from './ExperienceAndEducation';
import SkillsAndEndorsements from './SkillsAndEndorsements';
import Accomplishments from './Accomplishments';
import Interests from './Interests';

import Container from 'src/themes/Container';

const Profile = () => (
  <Container>
    <TopCard />
    <ExperienceAndEducation />
    <SkillsAndEndorsements />
    <Accomplishments />
    <Interests />
  </Container>
);

export default Profile;