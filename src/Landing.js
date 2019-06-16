import React from "react";
import styled from "styled-components";
import { text, wrappers, EvenSpace } from "./Styles";

export default function Landing() {
  return (
    <>
      <wrappers.Blue>
        <NameWrapper>
          <text.Heading>MAY</text.Heading>
          <text.Heading>KIM</text.Heading>
        </NameWrapper>
        <text.SubHeading>Software Engineer</text.SubHeading>
        <wrappers.BlueOverlay />
      </wrappers.Blue>
    </>
  );
}

const NameWrapper = styled(EvenSpace)`
  width: 9rem;
  flex-direction: column;
  letter-spacing: 0.4rem;
`;
