import React from 'react';

import TopCard from './TopCard';
import ExperienceAndEducation from './ExperienceAndEducation';
import SkillsAndEndorsements from './SkillsAndEndorsements';

import Container from 'src/themes/Container';

function Profile() {
  return (
    <Container>
      <TopCard />
      <ExperienceAndEducation />
      <SkillsAndEndorsements />
    </Container>
  );
}

export default Profile;