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
    <ContentWrapper id="gallery">
      <SectionHeaderWrapper>
        <SectionNumber>05</SectionNumber>
        <CoolLine />
        <text.Heading>Gallery</text.Heading>
      </SectionHeaderWrapper>
      <SectionBodyWrapper>(Coming soon)</SectionBodyWrapper>
    </ContentWrapper>
  );
}

// IG-style cards
// Link Osprey site
