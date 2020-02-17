import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 2rem;
  line-height: 1.4;
  font-weight: 400;
  color: rgba(0, 0, 0, .9);
  margin: 0;
  margin-bottom: 16px;
`;

export const List= styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const ClickableItem = styled.a`
  cursor: pointer;
  display: flex;
  width: 100%;
  flex-direction: row;
`;

export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 24px;
  padding-right: 24px;
  box-sizing: border-box;
`;
export const Logo = styled.div`
  position: relative;
  height: 56px;
  width: 56px;
  margin-right: 20px;

  img {
    width: 100%;
    display: block;
    box-sizing: border-box;
    background-clip: content-box;
    border: 0px solid transparent;
    border-radius: 6px;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 60px;
`;
export const Name = styled.span`
  font-size: 1.6rem;
  line-height: 1.5;
  font-weight: 600;
  color: rgba(0,0,0,.9);
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Followers = styled.span`
  font-size: 1.4rem;
  line-height: 1.4;
  font-weight: 400;
  color: rgba(0,0,0,.6);
`;

export const SeeAll = styled.a`
  display: block;
  padding: 10px 24px;
  line-height: 2rem;
  font-size: 1.6rem;
  font-weight: 600;
  border-top: 1px solid rgba(0,0,0,.15);
  text-align: center;
  color: #0073b1;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: #e5f5fc;
  }
`;