import { ThemeProvider } from 'styled-components';

import theme from "../themes/default";
import lightTheme from "../themes/light";
import GlobalStyles from './globals';
import { useState } from 'react';

const Theme = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <ThemeProvider theme={darkTheme? theme : lightTheme}>
      <GlobalStyles />
      <form action="#">
          <label className="switch">
            <input
              type="checkbox"
              onChange={() => setDarkTheme(toggle => !toggle)}
            />
            <span className="slider"></span>
          </label>
        </form>
      {children}
    </ThemeProvider>
  )
};

export default Theme;