import Header2 from "./components/header/Header2";
import Header1 from "./components/header/Header1";
import Header3 from "./components/header/Header3";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Hero from "./components/hero/Hero";
import Fot from "./components/footer/Fot";
import Main from "./components/main/main";
import ScrollToTop from "./components/scroll/ScrollToTop";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from "./components/about/AboutUs";
import HelpPage from "./components/help/HelpPage";
import ContactUsPage from "./components/contact/ContactUsPage";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider 
      // @ts-ignore
      value={colorMode}>
      <ThemeProvider 
        // @ts-ignore
        theme={theme}>
        <CssBaseline />
        <Router>
          <Header1 />
          <Header2 />
          <Header3 />

          <Box bgcolor={theme.
            // @ts-ignore
            palette.bg.main}>
            <Routes>
              <Route path="/" element={<><Hero /><Main /></>} />
              <Route path="/about-us" element={<AboutUs />} /> 
              <Route path="/help" element={<HelpPage />} />
              <Route path="/contact-us" element={<ContactUsPage />} />
            </Routes>
          </Box>

          <Fot />
          <ScrollToTop />
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
