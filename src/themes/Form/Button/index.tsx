import React from 'react';
import S from './style';

type TButton = {
  callback?: any,
  text: string,
  styles?: any,
}

const Button = ({ callback = () => {}, text, styles }: TButton) => {
  return (
    <S.Button
      {...styles}
      onClick={callback}
    >
      {text}
    </S.Button>
  );
}

export default Button;