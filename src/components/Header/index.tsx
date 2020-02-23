import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'src/themes/Container';
import * as S from './style';

const languages = [
  { key: 'en', label: 'English' },
  { key: 'tr', label: 'Türkçe' }
];

const Header = () => {
  return (
    <S.Header>
      <Container>
        <S.Centered>
          <select onChange={() => {}} defaultValue={'localeKey'}>
           {languages.map((language, index) => (
              <option key={`${index}${language.key}`}value={language.key}>{language.label}</option>
            ))}
          </select>
          <nav>
            <S.List>
              <S.ListItem><Link to="/login">Login</Link></S.ListItem>
              <S.ListItem><Link to="/profile">Profile</Link></S.ListItem>
            </S.List>
          </nav>
        </S.Centered>
      </Container>
    </S.Header>
  );
}

export default Header;