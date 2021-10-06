import React from "react";
import {
  Header,
  Footer,
  Rank,
  ImageLinkForm,
  FaceRecognition,
} from "../components";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 160px;
`;

const Dashboard = ({ theme, toggleTheme }) => {
  return (
    <div>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Container>
        <Rank />
        <ImageLinkForm />
        <FaceRecognition />
      </Container>
      <Footer />
    </div>
  );
};

export default Dashboard;
