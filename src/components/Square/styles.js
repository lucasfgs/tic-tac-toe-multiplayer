import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background: white;
  outline: 0;
  width: 100px;
  height: 100px;
  font-size: 50px;
  color: ${props =>
    props.winner ? (props.winner === props.value ? "green" : "red") : "black"};

  transition: 0.5s all linear;
`;
