import React, { useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
//* Context
import { Context } from "../context/GlobalState";
//* Components
import { Rank, ImageLinkForm, FaceRecognition } from "../components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 200px 0;
`;

const Dashboard = () => {
  const { user, loadUser, error, showError } = useContext(Context);

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
    try {
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
          Authorization: "Key 1902138e82dd4ae9b3cd265cdb66bd4c", //* Test Key :)
        },
        body: raw,
      };

      const response = await fetch(
        "https://api.clarifai.com/v2/models/f76196b43bbd45c99b4f3cd8e8b40a8a/versions/6dc7e46bc9124c5c8824be4822abe105/outputs",
        requestOptions
      );
      const data = await response.json();
      if (data.status.code === 10000) {
        showError(null);
        const count = await axios.put(
          "https://smart-server-brain.herokuapp.com/image",
          {
            id: user.id,
          }
        );

        loadUser(Object.assign(user, { entries: count.data }));

        displayBox(calculateFaceLocation(data));
      } else {
        showError(data.outputs[0].status.details);
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <Container>
      <Rank />
      <ImageLinkForm
        handleInputChange={handleInputChange}
        handleSubmit={handleInputSubmit}
      />
      <FaceRecognition imageUrl={imageUrl} box={box} error={error} />
    </Container>
  );
};

export default Dashboard;
