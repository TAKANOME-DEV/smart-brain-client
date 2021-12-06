import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Signin, Signup, Dashboard } from "./pages";
import { Main, Footer, GlobalStyles, Header } from "./components";
import { Provider } from "./context/GlobalState";

/**
 * @ProgressBar
 */

import NProgress from "nprogress";
import "./components/styles/nprogress.css";

const App = () => {
  let location = useLocation();

  useEffect(() => {
    NProgress.start();

    return NProgress.done(true);
  }, [location.pathname]);

  return (
    <Provider>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Provider>
  );
};

export default App;
