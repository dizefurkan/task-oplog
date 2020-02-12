import styles from 'styled-components';

export const Card = styles.section`
  position: relative;
  margin-bottom: 16px;
  background-color: #fff;
  box-shadow: 0 0 0 1px rgba(0,0,0,.15),0 2px 3px rgba(0,0,0,.2);
  border-radius: 2px;
  overflow: hidden;
`;

export const CardContainer = styles.div`
  padding: ${props => props.padding ? props.padding : '24px'}
`;