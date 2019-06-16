import React from "react";
import styled from "styled-components";
import { text, wrappers, EvenSpace, ContentWrapper } from "./Styles";

export default function Landing() {
  return (
    <ContentWrapper>
      <SocialMediaWrapper>
        <Handle>yammik @</Handle>
      </SocialMediaWrapper>
      <Wrapper>
        <NameWrapper>
          <text.Heading>MAY</text.Heading>
          <text.Heading>KIM</text.Heading>
        </NameWrapper>
        <text.SubHeading>Software Engineer</text.SubHeading>
      </Wrapper>
      <BlueWrapper slant="top" />
      <BlueWrapper />
    </ContentWrapper>
  );
}

const BlueWrapper = styled(wrappers.BlueTail)`
  &:after {
    border-top: 0;
    top: 0;
  }
`;

const SocialMediaWrapper = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
`;

const Handle = styled.span`
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  width: auto;
`;

const Wrapper = styled.div`
  margin-left: 4rem;
  margin-top: 6rem;
`;

const NameWrapper = styled(EvenSpace)`
  width: 9rem;
  flex-direction: column;
  letter-spacing: 0.4rem;
`;
