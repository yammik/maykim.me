import React from "react";

import {
  text,
  ContentWrapper,
  SectionNumber,
  SectionHeaderWrapper,
  CoolLine
} from "./Styles";

export default function About() {
  return (
    <ContentWrapper>
      <SectionHeaderWrapper>
        <SectionNumber>01</SectionNumber>
        <CoolLine />
        <text.Heading>About me</text.Heading>
      </SectionHeaderWrapper>
    </ContentWrapper>
  );
}
