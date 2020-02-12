import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import Card, { CardContainer } from 'src/themes/Card';
import MockData from 'src/pages/Profile/mock-data.json';
import * as S from './style';

const ExperienceAndEducation = () => {
  return (
    <Card>
      <CardContainer padding="24px 24px 0">
        <S.Title>
          <FormattedMessage
            id="profile.experience.title"
          />
        </S.Title>
      </CardContainer>
      <S.Companies>
        <ul>
        {MockData.company.map((company, index) => {
          const hasGroupExperience = company.experience.length > 1;

          return (
            <S.CompanyListItem key={`${index}${company.companyId}`}>
              <S.Company>
                {hasGroupExperience
                  ? renderGroupExperience(company)
                  : renderSingleExperience(company)
                }
              </S.Company>
            </S.CompanyListItem>
          )
        })}
        </ul>
      </S.Companies>
      <CardContainer padding="24px 24px 0">
        <S.Title>
          <FormattedMessage
            id="profile.education.title"
          />
        </S.Title>
      </CardContainer>
      <S.Educations>
        <ul>
          {MockData.education.map((education, index) => {
            return <S.EducationListItem key={index}>{renderEducation(education, index)}</S.EducationListItem>
          })}
        </ul>
      </S.Educations>
    </Card>
  );
};

const renderGroupExperience = (data: any) => {
  return (
    <Fragment>
      <S.CompanyDetails>
        <S.CompanyLogo src={data.image} />
        <div>
          <S.CompanyNameTitle>{data.companyName}</S.CompanyNameTitle>
          <S.TotalExperince>{data.totalTime}</S.TotalExperince>
        </div>
      </S.CompanyDetails>
      <div>
        {data.experience.map((experience: any, index: number) => {
          return (
            <S.Experience key={index}>
              <S.ExperienceRole>{experience.role}</S.ExperienceRole>
              <S.DatesEmployed>{experience.startDate} - {experience.endDate} 6mos</S.DatesEmployed>
              <S.Location>{experience.location}</S.Location>
              {experience.description &&
                <S.Description>{experience.description}</S.Description>
              }
            </S.Experience>
          );
        })}
      </div>
    </Fragment>
  );
};

const renderSingleExperience = (data: any) => {
  const [experience] = data.experience;
  return (
    <S.SingleExperience>
      <S.CompanyLogo src={data.image} />
      <div>
        <S.ExperienceRoleTitle>{data.experience[0].role}</S.ExperienceRoleTitle>
        <S.CompanyName>{data.companyName}</S.CompanyName>
        <S.DatesEmployed>{experience.startDate} - {experience.endDate} 6mos</S.DatesEmployed>
        <S.Location>{experience.location}</S.Location>
        {experience.description &&
          <S.Description>{experience.description}</S.Description>
        }
      </div>
    </S.SingleExperience>
  );
};

const renderEducation = (data: any, index: number) => {
  return (
    <S.Education key={`${index}`}>
    <S.SingleExperience>
      <S.CompanyLogo src={data.image} />
      <div>
        <S.ExperienceRoleTitle>{data.school}</S.ExperienceRoleTitle>
        <S.CompanyName>{data.degree}, {data.field}, {data.grade}</S.CompanyName>
        <S.DatesEmployed>{data.startDate} - {data.endDate} 6mos</S.DatesEmployed>
        {data.location && <S.Location>{data.location}</S.Location>}
        {data.description && <S.Description>{data.description}</S.Description>}
      </div>
    </S.SingleExperience>
    </S.Education>
  );
};

export default ExperienceAndEducation;
