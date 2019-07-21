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
        <IconsWrapper>
          <Skill name="something one" />
          <Skill name="something two" />
          <Skill name="something three" />
          <Skill name="something four" />
          <Skill name="something five" />
        </IconsWrapper>
        <TextWrapper>
          <LeftParagraph>
            Hi! I'm a junior engineer at Parsec Gaming. I am also in charge of
            all the bad jokes in the office.
          </LeftParagraph>
          <Paragraph>
            My work at Parsec includes the client React app (Typescript), mobile
            app (Swift/ObjC/Java), API (Go), as well as Discord bot (Python).
            Everyone does a little bit of everything here. Talk about startup.
          </Paragraph>
          <Paragraph>
            Prior to becoming an coding nerd, I was a science nerd in
            microbiological research. The domain knowledge from that is not so
            relevant professionally anymore, but it still shapes a lot of my
            habits and makes fun conversations.
          </Paragraph>
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

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const LeftParagraph = styled.div`
  font-family: "Josefin Slab", serif;
  font-weight: 600;
  font-size: 1.2rem;
  text-align: right;
  line-height: 1.8rem;
`;

export const Paragraph = styled.div`
  font-family: "Josefin Slab", serif;
  font-weight: 300;
  font-size: 1.2rem;
  text-align: right;
  margin-top: 0;
  margin-left: 1rem;
  line-height: 1.8rem;

  @media (max-width: 1024px) {
    margin-top: 1rem;
    margin-left: 0;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 4rem 0;
`;

const SkillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Block = styled.div`
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
