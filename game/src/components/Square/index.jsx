import React from "react";

import { Container } from "./styles";

const Square = ({ index, value, handleClick, lineWinner }) => {
  return (
    <Container
      winner={lineWinner}
      value={value}
      onClick={() => handleClick(index)}
    >
      {value}
    </Container>
  );
};

export default Square;
