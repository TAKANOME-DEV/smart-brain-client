import React, { useState, useContext } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { Rank, ImageLinkForm, FaceRecognition } from "../components";
import { getBoundingBox, updateEntries } from "../services/auth";
import { calculateFaceLocation } from "../lib/CalculateFaceLocation";
import { Context } from "../context/GlobalState";

const Container = styled.div`
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin: 6.25rem auto;
	}
`;

const Dashboard = () => {
	const { user, loadUser } = useContext(Context);

	const [input, setInput] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [box, setBox] = useState({});

	const handleInputChange = (e) => setInput(e.target.value);
	const displayBox = (box) => setBox(box);

	const handleInputSubmit = async () => {
		setImageUrl(input);
		try {
			const data = await getBoundingBox(input);
			const count = await updateEntries(user.id);
			displayBox(calculateFaceLocation(data));
			loadUser({ ...user, entries: count });
		} catch (err) {
			// toast.error("Oops! An unexpected error occurred, please try again");
			if (err.response) {
				toast.error(err.response.data);
				setImageUrl("");
			}
		}
	};

	return (
		<Container>
			<div className="container">
				<Rank />
				<ImageLinkForm
					handleInputChange={handleInputChange}
					handleSubmit={handleInputSubmit}
				/>
				<FaceRecognition imageUrl={imageUrl} box={box} />
			</div>
		</Container>
	);
};

export default Dashboard;
