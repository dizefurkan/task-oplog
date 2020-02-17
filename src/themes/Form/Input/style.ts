import styled from 'styled-components';

type TInput = {
  hasError?: boolean,
}

export default {
  Input: styled.input<TInput>`
    font-size: 1.8rem;
    line-height: 1.3;
    font-weight: 400;
    color: rgba(0,0,0,0.9);
    position: relative;
    height: 52px;
    padding: 28px 12px 6px;
    box-sizing: border-box;
    border: 1px solid rgba(0,0,0,0.6);
    background-color: #fff;
    transition: .3s all;
    outline: 0;
    width: 100%;

    ${({ hasError }) => hasError
      ? `border: solid #d11124 2px;`
      :
        (
          `
            &:hover {
              border-color: rgba(0,0,0,0.9);
            }

            &:focus {
              border-color: #0073b1;
              box-shadow: 0 0 0 1px #0073b1;
            }
          `
        )
    }
  `
};