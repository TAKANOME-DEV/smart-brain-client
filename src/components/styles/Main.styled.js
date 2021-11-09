import styled from "styled-components";

// Container
export const Container = styled.div`
  margin: 100px 50px 0 50px;
  display: grid;
  grid-column-gap: 10em;
  grid-template-columns: auto auto;
  @media (min-width: 600px) and (max-width: 850px) {
    grid-column-gap: 5em;
  }
  @media (max-width: 590px) {
    display: grid;
    grid-column-gap: 0px;
    grid-template-columns: auto;
    margin-top: 15em;
  }
`;

// Image
export const Image = styled.img`
  width: 100%;
  @media (max-width: 590px) {
    display: none;
  }
`;

// Paragraphe
export const Para = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// Title
export const Title = styled.p`
  font-weight: bold;
  font-size: 64px;
  line-height: 68px;
  color: #ffffff;
  @media (min-width: 600px) and (max-width: 850px) {
    font-size: 40px;
    line-height: 44px;
  }
  @media (max-width: 599px) {
    font-size: 32px;
    line-height: 36px;
  }
`;

// Text
export const Text = styled.p`
  font-weight: bold;
  font-size: 40px;
  line-height: 44px;
  margin: 50px 0;
  text-align: center;
  color: #ffffff;
  @media (min-width: 600px) and (max-width: 850px) {
    font-size: 28px;
    line-height: 32px;
  }
  @media (max-width: 599px) {
    font-size: 22px;
    line-height: 26px;
  }
`;

// Button
export const Button = styled.button`
  padding: 10px 100px;
  font-weight: bold;
  font-size: 40px;
  line-height: 44px;
  background: #ffffff;
  border-radius: 20px;
  color: #2f303a;
  cursor: pointer;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.39);
  text-align: center;
  @media (min-width: 600px) and (max-width: 850px) {
    font-size: 28px;
    line-height: 32px;
    padding: 10px 70px;
  }
  @media (max-width: 599px) {
    font-size: 22px;
    line-height: 26px;
    padding: 10px 70px;
  }
`;
