import React, { useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { ErrorMessage } from "../components/";
import { Rank, ImageLinkForm, FaceRecognition } from "../components";
import { Context } from "../context/GlobalState";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 100px 0;
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
          Authorization: process.env.REACT_APP_CLARIFAI_API_KEY,
        },
        body: raw,
      };

      const response = await fetch(
        process.env.REACT_APP_CLARIFAI_ENDPOINT,
        requestOptions
      );
      const data = await response.json();
      if (data.status.code === 10000) {
        showError(null);
        const count = await axios.put(
          `${process.env.REACT_APP_PROD_ENDPOINT}/image`,
          {
            id: user.id,
          }
        );

        loadUser({ ...user, entries: count.data });
        displayBox(calculateFaceLocation(data));
      } else {
        showError(data.outputs[0].status.description);
        setTimeout(() => showError(null), 3000);
      }
    } catch (err) {
      showError("Oops! An unexpected error occurred, please try again");
      setTimeout(() => showError(null), 3000);
      setImageUrl("");
    }
  };

  return (
    <Container>
      <Rank />
      <ImageLinkForm
        handleInputChange={handleInputChange}
        handleSubmit={handleInputSubmit}
      />
      {error ? (
        <ErrorMessage error={error} />
      ) : (
        <FaceRecognition imageUrl={imageUrl} box={box} />
      )}
    </Container>
  );
};

export default Dashboard;
