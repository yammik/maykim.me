import React from "react";
import {
  text,
  wrappers,
  ContentWrapper,
  SectionHeaderWrapper,
  SectionNumber,
  CoolLine,
  SectionBodyWrapper
} from "./Styles";

export default function Blogs() {
  return (
    <ContentWrapper>
      <SectionHeaderWrapper>
        <SectionNumber>04</SectionNumber>
        <CoolLine />
        <text.Heading>Blogs</text.Heading>
      </SectionHeaderWrapper>
      <SectionBodyWrapper>(Coming soon)</SectionBodyWrapper>
      <wrappers.GreenTail slant="top" />
      <wrappers.GreenTail />
    </ContentWrapper>
  );
}
