import React, {
  // createRef,
  useState,
} from "react";
import { ThemeProvider } from "styled-components";
import { Switch, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Home, Signin, Signup, Dashboard } from "./pages";
import { GlobalStyles, LightTheme, DarkTheme } from "./styles/GlobalStyles";
import { useDarkMode } from "./hooks/useDarkMode";

const App = () => {
  const [user, setUser] = useState({
    id: "",
    username: "",
    email: "",
    entries: 0,
    joined: "",
  });

  const loadUser = (user) =>
    setUser({
      id: user.id,
      username: user.username,
      email: user.email,
      entries: user.entries,
      joined: user.joined,
    });

  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? LightTheme : DarkTheme;

  let location = useLocation();

  // const ref = createRef();

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
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
              children={
                <Signin
                  theme={theme}
                  toggleTheme={toggleTheme}
                  loadUser={loadUser}
                />
              }
            />
            <Route
              path="/signup"
              children={
                <Signup
                  theme={theme}
                  toggleTheme={toggleTheme}
                  loadUser={loadUser}
                />
              }
            />
            <Route
              path="/dashboard"
              children={
                <Dashboard
                  theme={theme}
                  toggleTheme={toggleTheme}
                  user={user}
                  setUser={setUser}
                  username={user.username}
                  entries={user.entries}
                />
              }
            />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </ThemeProvider>
  );
};

export default App;
