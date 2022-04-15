import { ThemeProvider } from 'styled-components';
import theme from "../themes/default";
import lightTheme from "../themes/light";
import { GlobalStyles } from './globals';

const Theme = ({ children }) => {
  const dark = true;

  return (
    <ThemeProvider theme={dark ? theme : lightTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
};

export default Theme;