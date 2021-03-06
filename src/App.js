import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
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
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();
    return NProgress.done(true);
  }, [location.pathname]);

  return (
    <Provider>
      <GlobalStyles />
      <ToastContainer />
      <Header />
      <div>
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
      </div>
      <Footer />
    </Provider>
  );
};

export default App;
