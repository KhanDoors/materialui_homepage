import React from "react";
import Header from "./components/ui/Header";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/ui/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <h1>hello</h1>
    </ThemeProvider>
  );
}

export default App;