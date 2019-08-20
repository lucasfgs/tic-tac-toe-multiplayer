import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: #34495e;
`;

export const NewGame = styled.button`
  outline: 0;
  font-size: 100%;
  font-weight: bold;
  border: 4px solid black;
  box-shadow: 0 0 15px 10px #222f3e;
  width: 150px;
  height: 50px;

  transition: 0.5s all linear;

  &:hover {
    color: green;
  }
`;
