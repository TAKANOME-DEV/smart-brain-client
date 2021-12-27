import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Face = styled.img`
  margin-top: 20px;
  width: 500px;
  height: auto;
`;

export const Box = styled.div`
  position: absolute;
  box-shadow: 0 0 0 3px #149df2 inset;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
