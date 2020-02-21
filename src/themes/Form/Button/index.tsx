import React from 'react';
import S from './style';

type TButton = {
  callback?: () => void,
  text: string,
  styles?: object,
}

const Button = ({ callback = () => {}, text, styles = {} }: TButton) => {
  return (
    <S.Button
      styles={styles}
      onClick={callback}
    >
      {text}
    </S.Button>
  );
}

export default Button;