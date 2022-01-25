import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Signin, Signup, Dashboard } from "./pages";
import {
  Main,
  Footer,
  GlobalStyles,
  Header,
  RequireAuth,
  NotFound,
} from "./components";
import { Provider } from "./context/GlobalState";
import NProgress from "nprogress";
import "./components/styles/nprogress.css";

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 100px auto;
  display: flex;
  justify-content: center;
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
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Wrapper>
      <Footer />
    </Provider>
  );
};

export default App;
