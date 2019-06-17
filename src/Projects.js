import React from "react";
import {
  text,
  wrappers,
  ContentWrapper,
  SectionHeaderWrapper,
  SectionNumber,
  CoolLine
} from "./Styles";

export default function Projects() {
  return (
    <ContentWrapper>
      <SectionHeaderWrapper>
        <SectionNumber>02</SectionNumber>
        <CoolLine />
        <text.Heading>Projects</text.Heading>
      </SectionHeaderWrapper>
      <wrappers.BluerTail slant="top" />
      <wrappers.BluerTail />
    </ContentWrapper>
  );
}
