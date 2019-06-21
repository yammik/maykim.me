import React from "react";
import styled from "styled-components";

import {
  text,
  ContentWrapper,
  SectionNumber,
  SectionHeaderWrapper,
  CoolLine,
  SectionBodyWrapper
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
            labore et dolore magna aliqua.
          </RightParagraph>
          <RightParagraph>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </RightParagraph>
        </TextWrapper>
      </SectionBodyWrapper>
    </ContentWrapper>
  );
}

const TextWrapper = styled.div`
  margin: 0;
  margin-top: 3rem;
  display: flex;
  flex-direction: row;

  @media (max-width: 640px) {
    flex-direction: column;
  }
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
  margin-top: 0;
  margin-left: 1rem;

  @media (max-width: 640px) {
    margin-top: 1rem;
    margin-left: 0;
  }
`;

const SkillsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 4rem 0;
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
  text-align: center;
`;

function Skill({ name }) {
  return (
    <SkillWrapper>
      <Block />
      <BlockDesc>{name}</BlockDesc>
    </SkillWrapper>
  );
}
