import styled from 'styled-components';

export const Main = styled.main`
  position: relative;
`;

export const Content = styled.div`
  text-align: center;
`;

export const ContentTitle = styled.h1`
  font-size: 2.4rem;
  line-height: 1.3;
  font-weight: 600;
  color: rgba(0,0,0,0.9);
  padding: 0 0 4px 0;
`;
export const ContentSubtitle = styled.p`
  font-size: 1.6rem;
  line-height: 1.75;
  font-weight: 400;
  color: rgba(0,0,0,0.6);
  padding-bottom: 32px;
`;

export const Form = styled.form`
  display: block;
  margin: auto;
  width: 384px;
`;

export const Block = styled.div`
  position: relative;
  margin: 0 0 12px 0;
`;

type TInputLabel = {
  focused: boolean,
  hasError: boolean,
};

export const InputLabel = styled.label<TInputLabel>`
  font-size: 1.8rem;
  line-height: 1.3;
  font-weight: 400;
  color: ${({ hasError }) => hasError ? `#d11124` : `rgba(0,0,0,0.9)`};
  position: absolute;
  top: 0;
  left: 0;
  padding: 14px 0 0 12px;
  margin: 0;
  transition: .2s all;
  ${({ focused }) => {
    if (!focused) return null;
    return `
      top: -10px;
      font-size: 1.4rem;
      line-height: 1.4;
      font-weight: 400;
    `
  }}
`;

export const InputErrorLabel = styled.div`
  font-size: 1.4rem;
  line-height: 1.42857;
  font-weight: 600;
  color: rgba(0,0,0,0.9);
  margin: 4px 0 12px 0;
  text-align: left;
  color: #d11124;
`;

export const PasswordVisibilityButton = styled.span`
  position: absolute;
  top: 14px;
  right: 4px;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 2.4rem;
  padding: 0 8px;
  color: #004f81;
  cursor: pointer;

  &:hover {
    background-color: rgba(152,216,244,0.25);
    color: #006097;
  }
  &::focus {
    box-shadow: 0 0 0 1px #0073b1;
    border-color: #0073b1;
  }
`;