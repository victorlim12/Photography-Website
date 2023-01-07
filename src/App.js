import Display from "./Sections/Display";
import Hero from "./Sections/Hero";
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import Introduction from "./Sections/Introduction";
import Showcase from "./Sections/Showcase";
import Hobbies from "./Sections/Hobbies";
import CssBaseline from '@mui/material/CssBaseline';


let theme = createTheme({
  typography: {
    fontFamily: 'Helvetica Neue, Roboto'
  },
});
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
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
