import { Container, createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import { useState } from "react";
import Catalog from "../../features/Catalog/Catalog";
import Header from "./Header";

//Define theme
function App() {
  const [darkMode, setdarkMode] = useState(false);
  const Palettetype = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: Palettetype,
      background: {
        default: Palettetype==='light'? '#eaeae':'#555555'
      }
    }
  })

  function handleThemeChange() {
    setdarkMode(!darkMode)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Catalog />
      </Container>

    </ThemeProvider>
  );
}

export default App;
