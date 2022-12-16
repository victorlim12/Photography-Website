import Display from "./Components/Banner";
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';


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
      <Display/>
    </ThemeProvider>
  );
}

export default App;
