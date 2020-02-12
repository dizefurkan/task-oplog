import React from 'react';
import * as S from './style';

export const Card = ({ children }: any) => {
  return (
    <S.Card>{children}</S.Card>
  );
}

export const CardContainer = ({ children, ...props }: any) => {
  return (
    <S.CardContainer {...props}>{children}</S.CardContainer>
  );
}

export default Card;
