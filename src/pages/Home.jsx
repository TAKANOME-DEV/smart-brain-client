import React from "react";
import { Header, Main, Footer } from "../components";

const Home = ({ theme, toggleTheme }) => {
  return (
    <div>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
