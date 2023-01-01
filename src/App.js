import Display from "./Components/Banner";
import Hero from "./Components/Hero";
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import Introduction from "./Components/Introduction";


let theme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: 'Helvetica Neue'
  },
});
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Hero/>
      <Introduction/>
      <Display/>
    </ThemeProvider>
  );
}

export default App;
