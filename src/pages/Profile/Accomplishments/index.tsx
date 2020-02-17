import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Card, { CardContainer } from 'src/themes/Card';

import { groupBy } from 'src/utils';

import MockData from 'src/pages/Profile/mock-data.json';
import * as S from './style';

const types: any = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
];

const hasType = (type: number) =>
  !isNaN(types.find((item: any) => item === type))

const Accomplishments = () => {
  const { formatMessage: f } = useIntl();
  const [isContentCollapsed, setContentCollapsed] = useState(false);
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
      {groupedAccomplishments.map((item: any, index: number) => {
        const type = item[0].type;
        const typeTextId = 'profile.accomplishments.type';
        const publicationTitle =
          hasType(type)
            ? f({ id: typeTextId + type })
            : '';
        const count = item.length;
        const isLastChild = index === groupedAccomplishmentsLength - 1;
        // TODO Show Detail
        return (
          <S.Panel collapsed={isContentCollapsed} key={`${index}`}>
            <S.Count>{count}</S.Count>
            <S.Content isLastChild={isLastChild}>
              <S.PublicationTitle>{publicationTitle}</S.PublicationTitle>
              <S.AccomplishmentsNames>
                {item.map((accomplish: any, index: number) => <S.AccomplishName key={`${index}`}>{accomplish.name}</S.AccomplishName>)}
              </S.AccomplishmentsNames>
            </S.Content>
          </S.Panel>
        )
      })}
    </Card>
  );
};

export default Accomplishments;
