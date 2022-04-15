import { ThemeProvider } from 'styled-components';
import theme from "../themes/default";
import lightTheme from "../themes/light";
import { GlobalStyles } from './globals';
import { useAppContext } from '../context';

const Theme = ({ children }) => {
  const { turnTheme } = useAppContext();

  return (
    <ThemeProvider theme={!turnTheme ? theme : lightTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
};

export default Theme;