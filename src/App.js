import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import styled from "styled-components";
//* Pages
import { Signin, Signup, Dashboard } from "./pages";
//* Components
import { Main, Footer, GlobalStyles, Header } from "./components";
//* Provider
import { Provider } from "./context/GlobalState";
//* Progress Bar
import NProgress from "nprogress";
import "./components/styles/nprogress.css";

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 100px auto;
`;

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
      <Wrapper>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Wrapper>
      <Footer />
    </Provider>
  );
};

export default App;
