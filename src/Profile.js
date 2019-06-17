import React from "react";

import {
  text,
  ContentWrapper,
  SectionNumber,
  SectionHeaderWrapper,
  CoolLine
} from "./Styles";

export default function Profile() {
  return (
    <ContentWrapper>
      <SectionHeaderWrapper>
        <SectionNumber>03</SectionNumber>
        <CoolLine />
        <text.Heading>Profile</text.Heading>
      </SectionHeaderWrapper>
    </ContentWrapper>
  );
}
