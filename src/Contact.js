import React from "react";
import styled from "styled-components";
import {
  text,
  wrappers,
  ContentWrapper,
  SectionHeaderWrapper,
  SectionNumber,
  CoolLine
} from "./Styles";

export default function Contact() {
  return (
    <ContentWrapper>
      <SectionHeaderWrapper>
        <SectionNumber>04</SectionNumber>
        <CoolLine />
        <text.Heading>Contact</text.Heading>
      </SectionHeaderWrapper>
      <BlueGreenWrapper slant="top" />
      <BlueGreenWrapper />
    </ContentWrapper>
  );
}

const BlueGreenWrapper = styled(wrappers.BlueGreenTail)`
  &:after {
    border-bottom: 0;
    bottom: -10rem;
  }
`;
