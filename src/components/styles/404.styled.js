import styled from "styled-components";

export const Card = styled.div`
  width: 400px;
  height: auto;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #202027;
  border-radius: 20px;
  @media (min-width: 400px) and (max-width: 500px) {
    padding: 25px;
  }
  @media (max-width: 399px) {
    width: 300px;
    padding: 20px;
  }
`;

export const Title = styled.h2`
  font-size: 30px;
  @media (max-width: 399px) {
    font-size: 25px;
  }
`;

export const Content = styled.p`
  margin-top: 20px;
  font-size: 20px;
  line-height: 32px;
`;

export const Button = styled.button`
  font-size: 25px;
  padding: 10px 20px;
  margin-top: 30px;
  color: #2f303a;
  background-color: #fff;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
`;
