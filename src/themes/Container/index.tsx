import React from 'react';
import * as S from './style';

const Container = ({children}:any) => {
  return (
    <S.Container>
      {children}
    </S.Container>
  );
}

export default Container;