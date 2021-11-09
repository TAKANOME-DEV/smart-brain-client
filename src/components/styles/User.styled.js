import styled from "styled-components";

// COntainer
export const Container = styled.div`
  margin-left: 50px;
`;

// Icon
export const Icon = styled.svg`
  transition: all 0.5s linear;
  cursor: pointer;
  color: #6a63f3;
  position: absolute;
  display: none;
  width: 30px;
  margin-top: 15px;
  @media screen and (max-width: 600px) {
    display: initial;
    top: 0;
    right: 5%;
  }
`;

// Close
export const Close = styled.button`
  font-size: 25px;
  font-weight: bold;
  position: absolute;
  top: 5%;
  right: 5%;
  padding: 2px 10px;
  margin-bottom: 20px;
  color: #2f303a;
  background-color: #fff;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  transition: all 0.5s linear;
  &:hover {
    transform: translateY(-3px);
  }
`;

// Secondary Button
export const Secondary = styled.button`
  font-size: 28px;
  line-height: 32px;
  padding: 5px 20px;
  margin: 20px 0;
  color: #fff;
  background-color: #2f303a;
  border: 1px solid #ffffff;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

// Primary Button
export const Primary = styled.button`
  font-size: 28px;
  line-height: 32px;
  padding: 5px 20px;
  color: #2f303a;
  background-color: #fff;
  border-radius: 10px;
  cursor: pointer;
  margin-left: 20px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
`;
