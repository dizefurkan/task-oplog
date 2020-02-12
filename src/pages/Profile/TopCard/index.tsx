import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import Card, { CardContainer } from 'src/themes/Card';
import MockData from '../mock-data.json';
import * as S from './style';

const BackgroundImage = ({ imageUrl }:any) => {
  return (
    <S.Image src={imageUrl} />
  )
}

const TopCard = () => {
  return (
    <Card>
      <BackgroundImage imageUrl={MockData.backgroundImage} />
      <CardContainer padding="0 24px 24px">
        <S.ProfilePicture>
          <S.ProfilePictureImg src={MockData.user.profilePicture} />
        </S.ProfilePicture>
        <S.Content>
          <div>
            <S.FullName>{MockData.user.fullName}</S.FullName>
            <S.Headline>{MockData.user.headline}</S.Headline>
            <div>
              <S.Address>{MockData.user.address}</S.Address>
              <S.ConnectionsWrapper>
                <S.Connections>
                  {MockData.user.connections}{" "}
                  <FormattedMessage
                    id="profile.topcard.connections"
                  />
                </S.Connections>
              </S.ConnectionsWrapper>
              <S.ConnectionsWrapper>
                <S.ContactInfo>
                  <FormattedMessage
                    id="profile.topcard.contactInfo"
                  />
                </S.ContactInfo>
              </S.ConnectionsWrapper>
            </div>
          </div>
          <div>{renderExperienceList()}</div>
        </S.Content>
      </CardContainer>
    </Card>
  );
}

const renderExperienceList = () => {
  const { companyName, image: comapnyImage } = MockData.company[0];
  const education = MockData.education[0];
  const isEducationVisible = MockData.user.showEducation;

  if (!companyName && !education.school) return null;

  return (
    <Fragment>
      {companyName &&
        <S.Experience>
          <S.ExperienceImage src={comapnyImage} />
          {companyName}
        </S.Experience>
      }
      {isEducationVisible && education.school &&
        <S.Experience>
          <S.ExperienceImage src={education.image} />
          {education.school}
        </S.Experience>
      }
    </Fragment>
  );
}

export default TopCard;