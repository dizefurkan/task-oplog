import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import Card, { CardContainer } from 'src/themes/Card';
import { profileSkillsEndorsementType as EndorsementType } from 'src/constants';
import MockData from '../mock-data.json';
import * as S from './style';

const SkillsAndEndorsements = () => {
  return (
    <Card>
      <CardContainer padding="24px 24px 0">
        <S.Title>
          <FormattedMessage
            id="profile.skillsEndorsements.title"
          />
        </S.Title>
        {MockData.skills.map(renderSkill)}
      </CardContainer>
    </Card>
  );
};

const renderSkill = (item: any, index: number) => {
  let highlyskilledEndorsements, colleaguesEndorsements;
  const totalCount = item.endorsements.length;
  const hasEndorsement = !!totalCount;
  const hasEndorsementType =
    item.endorsements.find((item: any) =>
      item.endorsementType &&
      typeof item.endorsementType === 'number' &&
      item.endorsementType > 0
    );
  if (hasEndorsementType) {
    highlyskilledEndorsements = item.endorsements.filter((item: any) => item.endorsementType === 1);
    colleaguesEndorsements = item.endorsements.filter((item: any) => item.endorsementType === 2);
  }
  const firstEndorsement = hasEndorsement && item.endorsements[0];
  const otherEndorsomentsCount = totalCount - 1;

  return (
    <S.ListItem key={index}>
      <S.SkillName>
        {item.name}
        {hasEndorsement && <S.TotalCount>{totalCount}</S.TotalCount>}
      </S.SkillName>
      {hasEndorsement && !hasEndorsementType &&
        <S.EndorsementWrapper>
          <S.EndorsementLink>
            {totalCount === 1
              ? <FormattedHTMLMessage
                  id="profile.skillsEndorsementSingle"
                  values={{
                    fullName: firstEndorsement.fullName,
                  }}
                />
            : <FormattedHTMLMessage
                id="profile.skillsEndorsementMultiple"
                values={{
                  fullName: firstEndorsement.fullName,
                  count: otherEndorsomentsCount,
                }}
              />
            }
          </S.EndorsementLink>
        </S.EndorsementWrapper>
      }
      {hasEndorsement && hasEndorsementType &&
        <S.EndorsementWrapper>
          {highlyskilledEndorsements.length && renderHighlySkilledEndorsements(highlyskilledEndorsements)}
          {colleaguesEndorsements.length && renderColleaguesEndorsements(colleaguesEndorsements)}
        </S.EndorsementWrapper>
      }
    </S.ListItem>
  );
}

const renderHighlySkilledEndorsements = (data: []) => {
  const [dataFirst]: any[] = data;
  const otherEndorsomentsCount = data.length - 1;

  return (
    <S.EndorsementWrapper width={'50%'}>
      <S.ImageWrapper>
        <img src={dataFirst.image} />
      </S.ImageWrapper>
      <S.EndorsementLinkWrapper>
        <S.EndorsementLink>
          <FormattedHTMLMessage
            id="profile.skillEndorsementHighlySkilled"
            values={{
              fullName: dataFirst.fullName,
              count: otherEndorsomentsCount,
            }}
          />
        </S.EndorsementLink>
      </S.EndorsementLinkWrapper>
    </S.EndorsementWrapper>
  );
};

const renderColleaguesEndorsements = (data: any) => {
  console.log(data)
  return null;
}

export default SkillsAndEndorsements;