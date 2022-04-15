import Theme from '../styles/theme';
import { useState } from 'react';

export default function App({ Component, pageProps }) {
  const [darkTheme, setDarkTheme] = useState(true);

  const newPageProps = {darkTheme, setDarkTheme, ...pageProps};

  return (
    <>
      <Theme>
        <Component {...newPageProps} />
      </Theme>
    </>
  );
}
 