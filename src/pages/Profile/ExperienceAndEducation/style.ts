import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 2rem;
  line-height: 1.4;
  font-weight: 400;
  color: rgba(0, 0, 0, .9);
  margin: 0;
`;

export const Companies = styled.div`
  border-bottom: 1px solid rgba(0,0,0,.15);
  padding-bottom: 24px;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

export const Educations = styled.div`
  border-bottom: 1px solid rgba(0,0,0,.15);
  padding-bottom: 24px;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

export const CompanyListItem = styled.li`
  &:not(:last-child):after {
    content: '';
    display: block;
    border-bottom: 1px solid #e6e9ec;
    margin-top: 16px;
    margin-left: 112px;
  }
`;

export const EducationListItem = CompanyListItem;

export const Company = styled.section`
  padding: 20px 72px 0 24px;
  display: flex;
  flex-direction: column;
`;

export const Education = Company;

// Group Experience
export const CompanyDetails = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
`;

export const CompanyLogo = styled.img`
  margin-right: 24px;
  display: block;
  height: 56px;
  width: 56px;
  border: 4px solid transparent;
  border-radius: 6px;
`;

export const CompanyNameTitle = styled.h3`
  margin: 0;
  font-size: 1.6rem;
  line-height: 1.5;
  font-weight: 600;
  color: rgba(0,0,0,.9);
`;

export const ExperienceRoleTitle = CompanyNameTitle;

export const Experience = styled.div`
  position: relative;
  padding-left: 88px;
  &:not(:last-child) {
    padding-bottom: 24px;
  }

  &:not(:last-child):before {
    content: '';
    position: absolute;
    top: 30px;
    left: 32px;
    height: calc(100% - 30px);
    min-height: calc(60px - 30px);
    width: 2px;
    background-color: #e9e9e9;
  }
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 12px;
    left: 28px;
    border: 2px solid #cfcfcf;
    border-radius: 50%;
    height: 6px;
    width: 6px;
    background-color: #cfcfcf;
  }
`;

export const ExperienceRole = CompanyNameTitle;

export const TotalExperince = styled.span`
  font-size: 1.4rem;
`;

export const DatesEmployed = styled.div`
  color: rgba(0,0,0,.6);
  font-size: 1.4rem;
  line-height: 1.4rem;
}`;

export const Location = styled.span`
  color: rgba(0,0,0,.6);
  font-size: 1.4rem;
  line-height: 2rem;
`;

export const Description = styled.p`
  font-size: 1.4rem;
  line-height: 2rem;
  margin-bottom: 0;
  max-height: 8rem;
  overflow: hidden;
`;

// Single Experience

export const SingleExperience = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CompanyName = styled.span`
  font-size: 1.4rem;
  line-height: 1.4rem;
`;