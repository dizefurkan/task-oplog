import styled from 'styled-components';

export const Header = styled.header`
  padding: 0 30px;
  background: #283e4a;
  height: 52px;
`;

export const Centered = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 52px;
`;

export const List = styled.ul`
  margin-left: 20px;
`;
export const ListItem = styled.li`
  font-size: 1.4rem;
  line-height: 1.33333;
  display: inline-block;
  font-weight: 400;
  margin-right: 20px;
  transition: color .3s;
  a {
    color: #c7d1d8;
  }
`;