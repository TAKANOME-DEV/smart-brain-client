import styled from "styled-components";

export const Container = styled.div`
  width: 800px;
  height: 90px;
  background-color: #202027;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 490px) {
    width: 100%;
    height: 100px;
    flex-wrap: wrap;
  }

  @media (min-width: 492px) and (max-width: 700px) {
    width: 100%;
    height: 80px;
    flex-wrap: wrap;
  }
`;

export const Input = styled.input`
  width: 70%;
  height: 60%;
  font-size: 20px;
  border-radius: 10px;
  padding: 0 20px;
  border: none;
  outline: none;
  @media (max-width: 490px) {
    width: 85%;
    height: 40%;
  }
`;

export const Button = styled.button`
  font-size: 25px;
  font-weight: bold;
  padding: 13px 35px;
  margin-left: 10px;
  border-radius: 10px;
  border: none;
  background-color: #fff;
  color: #202027;
  cursor: pointer;
  transition: transform 0.5s;
  &:active {
    transform: scale(0.9);
  }
`;
