import React from "react";

import { Container, Message } from "./ViewError.styled";

export default function ViewError() {
  return (
    <Container>
      :(
      <Message>Something went wrong...</Message>
    </Container>
  );
}
