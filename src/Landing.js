import React from "react";
import styled from "styled-components";
import { text, wrappers, EvenSpace, ContentWrapper } from "./Styles";
import * as Icons from "./svg/icons";

export default function Landing() {
  return (
    <ContentWrapper>
      <SocialMediaWrapper>
        <Icons.GitHubSmall />
        <Icons.EmailSmall />
        <Icons.LinkedInSmall />
        <Icons.TwitterSmall />
        <Handle>yammik @</Handle>
      </SocialMediaWrapper>
      <Wrapper>
        <NameWrapper>
          <Name>MAY</Name>
          <Name>KIM</Name>
        </NameWrapper>
        <text.SubHeading>Software Engineer</text.SubHeading>
      </Wrapper>
      <BlueWrapper slant="top" />
      <BlueWrapper />
    </ContentWrapper>
  );
}

const Name = styled(text.Heading)`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 800;
`;

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
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;

const Handle = styled.span`
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  font-size: 1rem;
  width: auto;
`;

const Wrapper = styled.div`
  margin-left: 6rem;
  margin-top: 6rem;
`;

const NameWrapper = styled(EvenSpace)`
  width: 9rem;
  flex-direction: column;
  letter-spacing: 0.4rem;
`;
