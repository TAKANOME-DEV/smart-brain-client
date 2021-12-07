import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  gap: 80px;
  grid-template-columns: 1fr 2fr;
  margin: 0;
  @media screen and (max-width: 560px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

export const Image = styled.img`
  width: 100%;
  @media (max-width: 560px) {
    display: none;
  }
`;

export const Para = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 50px;
  color: #ffffff;
  @media screen and (max-width: 700px) {
    font-size: 40px;
  }
`;

export const Text = styled.p`
  font-weight: bold;
  font-size: 30px;
  margin: 20px 0;
  text-align: center;
  color: #ffffff;
  @media screen and (max-width: 700px) {
    font-size: 25px;
  }
`;

export const Button = styled.button`
  padding: 10px 50px;
  font-weight: bold;
  font-size: 30px;
  background: #ffffff;
  border-radius: 20px;
  color: #2f303a;
  cursor: pointer;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.39);
  text-align: center;
  @media screen and (max-width: 700px) {
    font-size: 25px;
    padding: 10px 30px;
  }
`;
