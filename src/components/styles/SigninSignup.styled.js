import styled from "styled-components";

// Container
export const Container = styled.div`
  display: grid;
  grid-column-gap: 17em;
  grid-template-columns: auto auto;
  margin: 100px 50px 0 50px;
  @media (min-width: 800px) and (max-width: 1000px) {
    display: grid;
    grid-column-gap: 5em;
    grid-template-columns: auto auto;
  }
  @media (max-width: 799px) {
    display: grid;
    grid-column-gap: 0em;
    grid-template-columns: auto;
  }
`;

// Image
export const Image = styled.img`
  max-width: 445px;
  width: 100%;
  height: auto;
  margin: 50px 0;
  @media (max-width: 799px) {
    display: none;
  }
`;

// User Info
export const UserInfo = styled.div`
  width: 100%;
  height: 37em;
  background: #202027;
  border-radius: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 0 70px;
  margin-top: 50px;
  @media (max-width: 799px) {
    padding: 0 20px;
  }
`;

// Title
export const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 64px;
  line-height: 68px;
  margin-top: 20px;
`;

// Form
export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

// Label
export const Label = styled.label`
  font-size: 22px;
  line-height: 26px;
  margin-bottom: 10px;
`;

// Input
export const Input = styled.input`
  border: none;
  outline: none;
  font-size: 20px;
  width: 100%;
  background: #ffffff;
  color: #202027;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 10px 15px;
`;

// Button
export const Button = styled.button`
  background: #ffffff;
  border-radius: 10px;
  width: 100%;
  padding: 10px 0;
  color: #202027;
  font-size: 28px;
  border: none;
  outline: none;
  font-weight: bold;
  cursor: pointer;
  margin-top: 30px;
`;

// Text
export const Text = styled.p`
  margin-top: 30px;
  font-size: 22px;
`;

// Span
export const Span = styled.span`
  font-size: 25px;
  color: #1172a7;
  text-decoration: underline;
  margin-left: 10px;
`;

// Error
export const Error = styled.div`
  color: red;
  font-size: 20px;
  margin-top: 10px;
  text-align: center;
`;
