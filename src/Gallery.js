import React from "react";

import {
  text,
  ContentWrapper,
  SectionNumber,
  SectionHeaderWrapper,
  CoolLine,
  SectionBodyWrapper
} from "./Styles";

export default function Gallery() {
  return (
    <ContentWrapper>
      <SectionHeaderWrapper>
        <SectionNumber>05</SectionNumber>
        <CoolLine />
        <text.Heading>Gallery</text.Heading>
      </SectionHeaderWrapper>
      <SectionBodyWrapper>(Coming soon)</SectionBodyWrapper>
    </ContentWrapper>
  );
}
