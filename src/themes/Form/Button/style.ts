import styled from 'styled-components';

type TButton = {
  styles: any
};

export default {
  Button: styled.button<TButton>`
    position: relative;
    display: inline-block;
    padding: 0 24px;
    height: 52px;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 52px;
    text-align: center;
    border: 0;
    border-radius: 2px;
    box-sizing: border-box;
    background-color: #0073b1;
    width: 100%;
    color: #fff;
    cursor: pointer;
    overflow: hidden;
    ...${({ styles }) => styles};

    &:hover {
      background-color: #006097;
      color: #fff;
    }
  `
}