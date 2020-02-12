import styles from 'styled-components';

export const Image = styles.img`
  position: relative;
  width: 100%;
  display: block;
`;

export const ProfilePicture = styles.button`
  position: relative;
  background-color: rgba(243,246,248,.94);
  box-shadow: inset 0 1.5px 3px 0 rgba(0,0,0,.15),0 1.5px 3px 0 rgba(0,0,0,.15);
  margin: auto;
  margin-left: auto;
  width: 160px;
  height: 160px;
  box-sizing: border-box;
  background-clip: content-box;
  border: 0 solid;
  padding: 0;
  text-align: center;
  margin-top: -104px;
  margin-bottom: 8px;
  border-radius: 50%;
`;

export const ProfilePictureImg = styles.img`
  width: 152px;
  height: 152px;
  display: block;
  border-radius: 50%;
  margin: auto;
`;

export const Content = styles.div`
  display: flex;
  flex-direction: row;
  div:first-child {
    flex: 1;
  }
`;

export const FullName = styles.div`
  font-size: 2.4rem;
  line-height: 1.33333;
  font-weight: 400;
  margin-bottom: 8px;
  color: #000;
`;

export const Headline = styles.h2`
  font-size: 1.8rem;
  line-height: 1.33333;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 4px;
  color: #000;
`;

export const Address = styles.span`
  color: #191919;
  font-size: 1.6rem;
  line-height: 1.5;
  font-weight: 400;
  margin-right: 12px;
`;

export const ConnectionsWrapper = styles.div`
  display: inline-block;
  a:before {
    content: '';
    position: absolute;
    left: -12px;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 3px;
    margin-bottom: 3px;
    margin-right: 12px;
    vertical-align: middle;
    border-radius: 50%;
    background-color: #000;
    display: inline-block;
  }
`;

export const Connections = styles.a`
  position: relative;
  font-size: 1.6rem;
  line-height: 1.5;
  font-weight: 700;
  color: #0073b1;
  margin: 0 12px;
  cursor: pointer;
`;

export const ContactInfo = Connections;

export const Experience = styles.a`
  font-size: 1.4rem;
  line-height: 1.42857;
  font-weight: 600;
  color: #000;
  display: flex;
  align-items: center;
  cursor: pointer;
  line-height: 20px;
  &:hover {
    color: #0073b1;
    text-decoration: underline;
  }
`;

export const ExperienceImage = styles.img`
  width: 32px;
  height: 32px;
  margin-right: 8px;
  display: block;
  background-clip: content-box;
  border: 4px solid transparent;
  border-radius: 6px;
`;
