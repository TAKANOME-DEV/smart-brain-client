import React from // createRef
"react";
import { ThemeProvider } from "styled-components";
import { Switch, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Home, Signin, Signup, Dashboard } from "./pages";
import { GlobalStyles, LightTheme, DarkTheme } from "./styles/GlobalStyles";
import { useDarkMode } from "./hooks/useDarkMode";
import { Provider } from "./context/GlobalState";

const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? LightTheme : DarkTheme;

  let location = useLocation();

  // const ref = createRef();

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Provider>
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames="page"
            timeout={300}
            // nodeRef={ref}
          >
            <Switch location={location}>
              <Route
                exact
                path="/"
                children={<Home theme={theme} toggleTheme={toggleTheme} />}
              />
              <Route
                path="/login"
                children={<Signin theme={theme} toggleTheme={toggleTheme} />}
              />
              <Route
                path="/signup"
                children={<Signup theme={theme} toggleTheme={toggleTheme} />}
              />
              <Route
                path="/dashboard"
                children={<Dashboard theme={theme} toggleTheme={toggleTheme} />}
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
