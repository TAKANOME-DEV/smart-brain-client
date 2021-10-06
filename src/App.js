import React from "react";
import { ThemeProvider } from "styled-components";
import { Switch, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Home, Signin, Signup, Dashboard } from "./pages";
import { GlobalStyles, LightTheme, DarkTheme } from "./styles/GlobalStyles";
import { useDarkMode } from "./hooks/useDarkMode";

const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? LightTheme : DarkTheme;

  let location = useLocation();

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="page" timeout={300}>
          <Switch location={location}>
            <Route exact path="/">
              <Home theme={theme} toggleTheme={toggleTheme} />
            </Route>

            <Route path="/login">
              <Signin theme={theme} toggleTheme={toggleTheme} />
            </Route>

            <Route path="/register">
              <Signup theme={theme} toggleTheme={toggleTheme} />
            </Route>

            <Route path="/dashboard">
              <Dashboard theme={theme} toggleTheme={toggleTheme} />
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </ThemeProvider>
  );
};

export default App;
