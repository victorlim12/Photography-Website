import Display from "./Sections/Display";
import Hero from "./Sections/Hero";
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import Introduction from "./Sections/Introduction";
import Showcase from "./Sections/Showcase";
import Hobbies from "./Sections/Hobbies";


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
      <Showcase/>
      <Hobbies/>
      </div>
    </ThemeProvider>
  );
}

export default App;
