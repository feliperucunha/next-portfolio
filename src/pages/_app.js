import Theme from '../styles/theme';
import { useState } from 'react';
import { AppWrapper } from '../context';

export default function App({ Component, pageProps }) {
  const [darkTheme, setDarkTheme] = useState(true);

  const newPageProps = {darkTheme, setDarkTheme, ...pageProps};

  return (
    <AppWrapper>
      <Theme>
        <Component {...newPageProps} />
      </Theme>
    </AppWrapper>
  );
}
 