import React, { useState } from "react";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Gallery from "./components/Gallery";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Header from "./components/Header";

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
      mode: 'dark',
  },
});

const App = () => {
  const [selectedView, setSelectedView] = useState("home");
  console.log(selectedView)
  const renderContent = () => {
    switch (selectedView) {
      case "home":
        return <Home />;
      case "portfolio":
        return <Portfolio />;
      case "gallery":
        return <Gallery />;
      case "about me":
        return <AboutMe />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };
  return (
  <ThemeProvider theme={theme}>
   <Header selectedView={selectedView} setSelectedView={setSelectedView} />
   <main>{renderContent()}</main>
  </ThemeProvider>
  );
};

export default App;
