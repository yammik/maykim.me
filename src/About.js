import React from "react";
import styled from "styled-components";

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
      <SectionBodyWrapper>
        <SkillsWrapper>
          <Skill name="something one" />
          <Skill name="something two" />
          <Skill name="something three" />
          <Skill name="something four" />
          <Skill name="something five" />
        </SkillsWrapper>
        <TextWrapper>
          <LeftParagraph>
            Hey there! I'm May. Software engineer Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </LeftParagraph>
          <RightParagraph>
            Hey there! I'm May. Software engineer Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </RightParagraph>
        </TextWrapper>
      </SectionBodyWrapper>
    </ContentWrapper>
  );
}

const TextWrapper = styled.div`
  margin: 3rem 0;
  display: flex;
  flex-direction: row;
`;

const LeftParagraph = styled.div`
  font-family: "Josefin Slab", serif;
  font-weight: 600;
  font-size: 1.2rem;
  text-align: right;
`;

const RightParagraph = styled.div`
  font-family: "Josefin Slab", serif;
  font-weight: 300;
  font-size: 1.2rem;
  text-align: right;
`;

export const SectionBodyWrapper = styled.div`
  padding: 4rem 3rem;
`;

const SkillsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const SkillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Block = styled.div`
  width: 2rem;
  height: 2rem;
  background: rgb(188, 188, 188);
  margin-bottom: 1rem;
`;
const BlockDesc = styled.span`
  font-family: "Josefin Slab", serif;
  font-weight: 400;
  font-size: 1rem;
`;

function Skill({ name }) {
  return (
    <SkillWrapper>
      <Block />
      <BlockDesc>{name}</BlockDesc>
    </SkillWrapper>
  );
}
