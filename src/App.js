import React from "react";
import Display from "./Sections/Display";
import Hero from "./Sections/Hero";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import Introduction from "./Sections/Introduction";
import Showcase from "./Sections/Showcase";
import Hobbies from "./Sections/Hobbies";
import ComingSoon from "./Sections/ComingSoon";
import CssBaseline from "@mui/material/CssBaseline";
import Dailyboard from "./Sections/Dailyboard";

let theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: "Helvetica Neue, Roboto",
  },
});
theme = responsiveFontSizes(theme);

function App() {
  const [bgColor, setBgColor] = React.useState("normal");

  const listenScrollEvent = () => {
    window.scrollY > window.screen.height * 3.8
      ? setBgColor("Normals")
      : setBgColor("normal");
  };

  React.useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{
          backgroundColor:
            window.scrollY > window.screen.height * 3.8 ? "white" : "black",
        }}
      >
        <Hero />
        <Introduction />
        <Display />
        <Showcase />
        <Hobbies bgColor={bgColor} />
        <Dailyboard />
        <ComingSoon bgColor={bgColor} />
        {/* <Dailyfeed/> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
