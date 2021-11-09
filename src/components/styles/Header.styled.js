import styled from "styled-components";

// Nav
export const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 10px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #2f303a;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
`;

// Secondary Button
export const Secondary = styled.button`
  font-size: 28px;
  line-height: 32px;
  padding: 5px 20px;
  color: #fff;
  background-color: #2f303a;
  border: 1px solid #ffffff;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  @media (max-width: 600px) {
    display: none;
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
  @media (max-width: 600px) {
    display: none;
  }
`;

// Logo Image
export const Logo = styled.img``;
