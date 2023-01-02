import Display from "./Components/Display";
import Hero from "./Components/Hero";
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import Introduction from "./Components/Introduction";
import ImageMasonry from "./Components/Gallery";


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
      <div style={{backgroundColor:'black'}}>
      <Hero/>
      <Introduction/>
      <Display/>
      </div>
    </ThemeProvider>
  );
}

export default App;
