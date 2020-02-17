import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import Container from 'src/themes/Container';
import Input from 'src/themes/Form/Input';
import Button from 'src/themes/Form/Button';
import * as S from './style';

const credentials = {
  email: 'admin',
  password: 'admin'
}

const Login = () => {
  const { formatMessage: f } = useIntl();
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmited, setSubmited] = useState(false);
  const [formError, setFormError] = useState({
    email: '',
    password: '',
  });

  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const passwordVisibilityButton =
    f({
      id: isPasswordVisible
        ? 'login.form.passwordHide'
        : 'login.form.passwordShow'
    });

  const handleEmailFocus = () => setEmailFocused(!emailFocused);
  const handlePasswordFocus = () => setPasswordFocused(!passwordFocused);
  const handlePasswordVisibility = () =>
    setPasswordVisibility(!isPasswordVisible);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (email == credentials.email && password == credentials.password) {
      history.push('/profile');
      return;
    }

    setSubmited(true);

    let errors = {...formError};

    if (!email) {
      errors = {
        ...errors,
        email: f({ id: 'login.form.error.email' })
      };
    } else {
      delete errors.email;
    }
    if (!password) {
      errors = {
        ...errors,
        password: f({ id: 'login.form.error.password' })
      };
    } else {
      delete errors.password;
    }
    setFormError(errors);
    // TODO - Add joi validation. And make dynamic.
  };

  const hasEmailError = isSubmited ? formError.hasOwnProperty('email') : false;
  const hasEmailPassword = isSubmited ? formError.hasOwnProperty('password') : false;

  return (
    <Container>
      <S.Main>
        <S.Content>
          <S.ContentTitle>
            <FormattedMessage id="login.heading" />
          </S.ContentTitle>
          <S.ContentSubtitle>
            <FormattedMessage id="login.subheading" />
          </S.ContentSubtitle>
        </S.Content>
        <S.Form onSubmit={handleSubmit}>
          <S.Block>
            <Input
              type="text"
              value={email}
              callback={(event: any) => setEmail(event.target.value)}
              onFocus={handleEmailFocus}
              onBlur={handleEmailFocus}
              hasError={hasEmailError}
            />
            <S.InputLabel
              focused={emailFocused || !!email}
              hasError={hasEmailError}
            >
              {f({ id: 'login.form.email' })}
            </S.InputLabel>
            {hasEmailError && <S.InputErrorLabel>{formError.email}</S.InputErrorLabel>}
          </S.Block>
          <S.Block>
            <Input
              type={isPasswordVisible ? 'text' : 'password'}
              value={password}
              callback={(event: any) => setPassword(event.target.value)}
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordFocus}
              hasError={isSubmited ? formError.hasOwnProperty('password') : false}
            />
            <S.InputLabel
              focused={passwordFocused || !!password}
              hasError={isSubmited ? formError.hasOwnProperty('password') : false}
            >
              {f({ id: 'login.form.password' })}
            </S.InputLabel>
            <S.PasswordVisibilityButton onClick={handlePasswordVisibility}>
              {passwordVisibilityButton}
            </S.PasswordVisibilityButton>
            {hasEmailPassword && <S.InputErrorLabel>{formError.password}</S.InputErrorLabel>}
          </S.Block>
          <Button
            styles={{
              margin: '8px 0 0 0'
            }}
            text={f({ id: 'login.form.button' })}
          />
        </S.Form>
      </S.Main>
    </Container>
  );
}

export default Login;