import React from "react";
import Header from "./components/ui/Header";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/ui/Theme";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Footer from "./components/ui/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <div style={{ height: "2000px" }}> Home</div>}
          />
          <Route
            exact
            path="/services"
            component={() => <div> services</div>}
          />
          <Route
            exact
            path="/customsoftware"
            component={() => <div> customsoftware</div>}
          />
          <Route
            exact
            path="/mobileapps"
            component={() => <div> mobileapps</div>}
          />
          <Route
            exact
            path="/websites"
            component={() => <div> websites</div>}
          />
          <Route
            exact
            path="/khandoors"
            component={() => <div> khandoors</div>}
          />
          <Route exact path="/about" component={() => <div> about</div>} />
          <Route exact path="/contact" component={() => <div> contact</div>} />
          <Route
            exact
            path="/estimate"
            component={() => <div> estimate</div>}
          />
          <Route path="" render={() => <div> 404 not found</div>} />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
