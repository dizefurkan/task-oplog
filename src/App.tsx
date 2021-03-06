import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyle';
import locale_en from "./i18n/translations/en.json";
import locale_tr from "./i18n/translations/tr.json";
import Login from './pages/Login';
import Profile from './pages/Profile';
import Header from 'src/components/Header';


const locales:any = {
  'tr': locale_tr,
  'en': locale_en
};
const defaultLanguage = 'en';

const App = () => {
  const [localeKey, setLocaleKey] = useState(defaultLanguage);
  const handleChange = (event:any) => {
    const { value } = event.target;
    setLocaleKey(value);
  };

  return (
    <IntlProvider locale={localeKey} messages={locales[localeKey]}>
      <ThemeProvider theme={{}}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </Router>
        <GlobalStyle />
      </ThemeProvider>
    </IntlProvider>
  );
}

// const PrivateRoute = ({ children, ...rest }: any) => {
//   return (
//     <Route
//       {...rest}
//       render={() => children}
//     />
//   );
// }

export default App;
