import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Card, { CardContainer } from 'src/themes/Card';

import { groupBy } from 'src/utils';

import MockData from 'src/pages/Profile/mock-data.json';
import * as S from './style';

enum AccomplishmentType {
  Publication,
  Patent,
  Course,
  Project,
  HonorAndAward,
  TestScore,
  Language,
  Organization
};

const Accomplishment = (props: any) => {
  const { formatMessage: f } = useIntl();
  const { data, isLastChild } = props;
  const type = data[0].type;
  const publicationTitle: string = AccomplishmentType[type]
    ? f({ id: `profile.accomplishments.type${type}` })
    : '';
  const count = data.length;
  // TODO Show Detail

  return (
    <S.Panel>
      <S.Count>{count}</S.Count>
      <S.Content isLastChild={isLastChild}>
        <S.PublicationTitle>{publicationTitle}</S.PublicationTitle>
        <S.AccomplishmentsNames>
          {data.map((accomplish: { name: string }, index: number) =>
            <S.AccomplishName key={index}>{accomplish.name}</S.AccomplishName>)
          }
        </S.AccomplishmentsNames>
      </S.Content>
    </S.Panel>
  );
}

const Accomplishments = () => {
  const groupedAccomplishments: any[] = Object.values(groupBy(MockData.accomplishments, 'type'));
  const groupedAccomplishmentsLength = groupedAccomplishments.length;

  return (
    <Card>
      <CardContainer padding="24px 24px 0">
        <S.Title>
          <FormattedMessage
            id="profile.accomplishments.title"
          />
        </S.Title>
      </CardContainer>
      {groupedAccomplishments.map((item: [], index: number) => {
        const isLastChild = index === groupedAccomplishmentsLength - 1;

        return (
          <Accomplishment
            key={index}
            data={item}
            isLastChild={isLastChild}
          />
        );
      })}
    </Card>
  );
};

export default Accomplishments;
