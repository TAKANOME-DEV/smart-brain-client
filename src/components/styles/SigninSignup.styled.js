import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 35% 45%;
  gap: 200px;
  @media (min-width: 701px) and (max-width: 1015px) {
    gap: 100px;
  }
  @media (min-width: 451px) and (max-width: 700px) {
    gap: 0;
    grid-template-columns: 10% 80% 10%;
  }
  @media screen and (max-width: 450px) {
    gap: 0;
    grid-template-columns: 5% 90% 5%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  margin: 30px 0;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const UserInfo = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 5% 80% 5%;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  background: #202027;
  border-radius: 20px;
  @media screen and (max-width: 450px) {
    grid-template-columns: 5% 90% 5%;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 50px;
  align-self: flex-start;
  justify-self: flex-start;
  margin-top: 10px;
  margin-left: 2.5em;
  @media (min-width: 451px) and (max-width: 700px) {
    margin-left: 3em;
  }
  @media screen and (max-width: 450px) {
    margin-left: 2.5em;
  }
`;

export const Form = styled.form`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 22px;
  /* margin-bottom: 10px; */
`;

export const Input = styled.input`
  border: none;
  outline: none;
  font-size: 20px;
  width: 100%;
  background: #ffffff;
  color: #202027;
  border-radius: 10px;
  margin: 10px 0;
  padding: 10px 15px;
`;

export const Button = styled.button`
  background: #ffffff;
  border-radius: 10px;
  width: 100%;
  padding: 10px 0;
  color: #202027;
  font-size: 25px;
  border: none;
  outline: none;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
`;

export const Text = styled.p`
  margin-top: 30px;
  font-size: 20px;
`;

export const Span = styled.span`
  font-size: 22px;
  color: #1172a7;
  text-decoration: underline;
  margin-left: 10px;
`;
