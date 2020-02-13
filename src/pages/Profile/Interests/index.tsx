import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Card, { CardContainer } from 'src/themes/Card';
import { interests } from 'src/pages/Profile/mock-data.json';
import * as S from './style';

const Interests = () => {
  const [seeAll, setSeeAll] = useState(false);
  const dataLimit = 6;
  const data = seeAll
    ? interests
    : interests.filter((item, index) => index < 6)
  const handleClickSeeAll = () => !seeAll && setSeeAll(true);

  return (
    <Card>
      <CardContainer padding="24px 24px 0">
        <S.Title>
          <FormattedMessage
            id="profile.interests.title"
          />
        </S.Title>
        <S.List>
          {data.map((item: any, index: number) => {
            const suffix = item.followerCount > 1 ? 's' : '';
            const pronoun = item.type === 0 || item.type === 2
              ? `followers`
              : `members`;

            return (
              <S.ListItem key={`index-${item.id}`}>
                <S.ClickableItem>
                  <S.Logo>
                    <img src={item.logo} alt="" />
                  </S.Logo>
                  <S.Content>
                    <S.Name>{item.name}</S.Name>
                    <S.Followers>
                      {item.followerCount}{" "}
                      <FormattedMessage id={`profile.interests.${pronoun}`} />
                    </S.Followers>
                  </S.Content>
                </S.ClickableItem>
              </S.ListItem>
            );
          })}
        </S.List>
      </CardContainer>
      {!seeAll &&
        <S.SeeAll onClick={handleClickSeeAll}>
          <FormattedMessage id="profile.interests.seeAll" />
        </S.SeeAll>
      }
    </Card>
  );
};

export default Interests;
