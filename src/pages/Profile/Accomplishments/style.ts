import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 2rem;
  line-height: 1.4;
  font-weight: 400;
  color: rgba(0, 0, 0, .9);
  margin: 0;
  margin-bottom: 16px;
`;

type TPanel = {
  collapsed: boolean
}

export const Panel = styled.section<TPanel>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-color: ${({collapsed}) => collapsed ? '#f3f6f8' : '#fff'}
  ${({collapsed}) => collapsed && `border-top: 1px solid rgba(0,0,0,.15);`}
`;

export const Count = styled.h3`
  font-size: 3.2rem;
  line-height: 1.25;
  font-weight: 400;
  color: #0073b1;
  min-width: 64px;
  text-align: right;
  padding-right: 12px;
  margin-top: -3px;
`;

type TContent = {
  isLastChild: boolean
}

export const Content = styled.div<TContent>`
  position: relative;
  border-bottom: ${({isLastChild}) => isLastChild ? 0 : '1px solid #e6e9ec'};
  margin-bottom: 16px;
`;

export const PublicationTitle = styled.h3`
  margin: 0;
  font-size: 1.4rem;
  line-height: 1.4;
  font-weight: 600;
  margin-bottom: 10px;
  color: #0073b1;
`;

export const AccomplishmentsNames = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  padding-right: 48px;
  margin-bottom: 16px;
  word-wrap: break-word;
  word-break: break-word;
`;

export const AccomplishName = styled.li`
  line-height: 2.4rem;
  font-size: 1.4rem;
  position: relative;
  display: inline;
  position: relative;
  padding-right: 10px;
  margin-right: 10px;

  &:not(:last-child):after {
    content: '';
    width: 3px;
    height: 3px;
    border-radius: 50%;
    position: absolute;
    background-color: #000;
    top: 50%;
    transform: translateY(-50%);
    right: -1.5px;
  }
`;