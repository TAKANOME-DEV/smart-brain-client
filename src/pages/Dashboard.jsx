import React, { useState } from "react";
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
`;

const Dashboard = ({
  theme,
  toggleTheme,
  username,
  entries,
  setUser,
  user,
}) => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [box, setBox] = useState({});

  const handleInputChange = (e) => setInput(e.target.value);

  const calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;

    const image = document.getElementById("box");

    const width = image.width;
    const height = image.height;

    return {
      topRow: clarifaiFace.top_row * height,
      bottomRow: height - clarifaiFace.bottom_row * height,
      leftCol: clarifaiFace.left_col * width,
      rightCol: width - clarifaiFace.right_col * width,
    };
  };

  const displayBox = (box) => setBox(box);

  const handleInputSubmit = async () => {
    setImageUrl(input);

    const raw = JSON.stringify({
      user_app_id: {
        user_id: process.env.USER_ID,
        app_id: process.env.APP_ID,
      },
      inputs: [
        {
          data: {
            image: {
              url: input,
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key 1902138e82dd4ae9b3cd265cdb66bd4c", // It is just a test key :)
      },
      body: raw,
    };

    await fetch(
      "https://api.clarifai.com/v2/models/f76196b43bbd45c99b4f3cd8e8b40a8a/versions/6dc7e46bc9124c5c8824be4822abe105/outputs",
      requestOptions
    )
      .then((res) => res.json())
      .then((data) => {
        fetch("https://smart-server-brain.herokuapp.com/image", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: user.id,
          }),
        })
          .then((res) => res.json())
          .then((entry) => setUser(Object.assign(user, { entries: entry })))
          .catch((err) => console.log(err));
        displayBox(calculateFaceLocation(data));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Container>
        <Rank username={username} entries={entries} />
        <ImageLinkForm
          handleInputChange={handleInputChange}
          handleSubmit={handleInputSubmit}
        />
        <FaceRecognition imageUrl={imageUrl} box={box} />
      </Container>
      <Footer />
    </div>
  );
};

export default Dashboard;
