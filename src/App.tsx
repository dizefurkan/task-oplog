import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import locale_en from "./i18n/translations/en.json";
import locale_tr from "./i18n/translations/tr.json";
import Profile from './pages/Profile';
import './App.css';

const languages = [
  { key: 'en', label: 'English' },
  { key: 'tr', label: 'Türkçe' }
];

const data:any = {
  'tr': locale_tr,
  'en': locale_en
};
const defaultLanguage = 'en';


const App = () => {
  const [locale, setLocale] = useState(defaultLanguage);
  const handleChange = (event:any) => {
    const { value } = event.target;
    setLocale(value);
  };

  return (
    <IntlProvider locale={locale} messages={data[locale]}>
      <select onChange={handleChange} defaultValue={locale}>
       {languages.map((language, index) => (
          <option key={`${index}${language.key}`}value={language.key}>{language.label}</option>
        ))}
      </select>
      <Profile />
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
