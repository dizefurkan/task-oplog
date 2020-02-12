import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 2rem;
  line-height: 1.4;
  font-weight: 400;
  color: rgba(0, 0, 0, .9);
  margin: 0;
  margin-bottom: 16px;
`;

export const ListItem = styled.div`
  padding: 16px 0 12px;
  border-bottom: 1px solid #e6e9ec;
`;

export const SkillName = styled.a`
  display: inline-block;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 8px;
  color: rgba(0,0,0,.9);
  cursor: pointer;
`;

export const TotalCount = styled.span`
  position: relative;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.4;
  margin-left: 16px;
  top: 2px;
  color: rgba(0,0,0,.6);
  &:before {
    position: absolute;
    left: -8px;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    width: 2px;
    height: 2px;
    line-height: 1.4;
    border-radius: 50%;
    background-color: rgba(0,0,0,.6);
    content: '';
  }
`;

export const ImageWrapper = styled.div`
  width: 32px;
  height: 32px;
  overflow: hidden;
  margin-right: 4px;
  img {
    width: 32px;
    height: 32px;
    border: 3px solid transparent;
    box-sizing: border-box;
    border-radius: 6px;
    display: block;
  }
`;

type Props = {
  width?: string
}

export const EndorsementWrapper = styled.div<Props>`
  display: flex;
  flex-directions: row;
  align-items: center;
  width: ${(props:any) => props.width || '100%'}
`;

export const EndorsementLinkWrapper = styled.div`
  flex: 1;
`;

export const EndorsementLink = styled.a`
  display: inline-block;
  font-size: 1.4rem;
  line-height: 1.5;
  text-decoration: none;
  color: rgba(0,0,0,.75);
  cursor: pointer;
`;