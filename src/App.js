import React from "react";
import { Routes, Route } from "react-router-dom";
import { Signin, Signup, Dashboard } from "./pages";
import { Main, Footer, GlobalStyles, Header } from "./components";
import { Provider } from "./context/GlobalState";

const App = () => {
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
