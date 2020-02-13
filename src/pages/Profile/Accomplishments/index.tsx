import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Card, { CardContainer } from 'src/themes/Card';

import { groupBy } from 'src/utils';

import MockData from 'src/pages/Profile/mock-data.json';
import * as S from './style';

const types: any = {
  0: 'Yayın',
  1: 'Patent',
  2: 'Kurs',
  3: 'Proje',
  4: 'Onur ve Ödül',
  5: 'Sınav Puanı',
  6: 'Dil',
  7: 'Organizasyon',
};

const Accomplishments = () => {
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
        const publicationTitle: any = types[item[0].type];
        const count = item.length;
        const isLastChild = index === groupedAccomplishmentsLength - 1;
        // TODO Show Detail
        return (
          <S.Panel collapsed={isContentCollapsed}>
            <S.Count>{count}</S.Count>
            <S.Content isLastChild={isLastChild}>
              <S.PublicationTitle>{publicationTitle}</S.PublicationTitle>
              <S.AccomplishmentsNames>
                {item.map((accomplish: any) => <S.AccomplishName>{accomplish.name}</S.AccomplishName>)}
              </S.AccomplishmentsNames>
            </S.Content>
          </S.Panel>
        )
      })}
    </Card>
  );
};

export default Accomplishments;
