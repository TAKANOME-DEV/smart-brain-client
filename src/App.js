import React from "react"; // createRef
import { Switch, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Signin, Signup, Dashboard } from "./pages";
import { Main, Footer, GlobalStyles, Header } from "./components";
import { Provider } from "./context/GlobalState";

const App = () => {
  let location = useLocation();

  // const ref = createRef();

  return (
    <Provider>
      <GlobalStyles />
      <Header />
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="page"
          timeout={300}
          // nodeRef={ref}
        >
          <Switch location={location}>
            <Route exact path="/" children={<Main />} />
            <Route path="/login" children={<Signin />} />
            <Route path="/signup" children={<Signup />} />
            <Route path="/dashboard" children={<Dashboard />} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </Provider>
  );
};

export default App;
