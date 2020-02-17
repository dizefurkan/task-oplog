import React from 'react';
import S from './style';

type TInput = {
  type: 'email' | 'password' | 'checkbox' | 'text',
  name?: string,
  required?: boolean,
  callback: any,
  value: string,
  onFocus?: any,
  onBlur?: any,
  hasError?: boolean,
}

const Input = ({ type, name, value, required, callback, onFocus, onBlur, hasError }: TInput) => {
  return (
    <S.Input
      type={type}
      name={name}
      required={required}
      onChange={callback}
      onFocus={onFocus}
      onBlur={onBlur}
      value={value}
      hasError={hasError}
    />
  );
}

export default Input;