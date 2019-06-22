import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import {
  text,
  wrappers,
  ContentWrapper,
  SectionHeaderWrapper,
  SectionNumber,
  CoolLine,
  SectionBodyWrapper
} from "./Styles";

export default function Projects({ projects }) {
  console.log(projects);
  return (
    <ContentWrapper>
      <SectionHeaderWrapper>
        <SectionNumber>02</SectionNumber>
        <CoolLine />
        <text.Heading>Projects</text.Heading>
      </SectionHeaderWrapper>
      <SectionBodyWrapper>
        {projects.map((project, i) => {
          return (
            <ProjectItem
              key={i}
              project={project}
              side={i % 2 === 0 ? "right" : "left"}
            />
          );
        })}
      </SectionBodyWrapper>
      <wrappers.BluerTail slant="top" />
      <wrappers.BluerTail />
    </ContentWrapper>
  );
}

const ProjectItem = ({ project, side }) => {
  const { title, tagline, imgURL, desc } = project;

  const ref = useRef();
  const [offset, setOffset] = useState(10);
  const [showDesc, setShowDesc] = useState(false);

  useEffect(() => {
    function checkPos() {
      const { y } = ref.current.getBoundingClientRect();
      if (window.innerHeight > y && y > 0) {
        setOffset(0);
      }
    }

    checkPos();
    window.addEventListener("scroll", checkPos);

    return () => {
      window.removeEventListener("scroll", checkPos);
    };
  }, []);

  return (
    <ProjectWrapper ref={ref} side={side} offset={offset}>
      <ProjectDesc show={showDesc} side={side}>
        {desc}
      </ProjectDesc>
      <ImgTitleWrapper
        offset={offset}
        side={side}
        onMouseEnter={() => setShowDesc(true)}
        onMouseLeave={() => setShowDesc(false)}
      >
        <ProjectTitle
          offset={offset}
          side={side}
          title={title}
          tagline={tagline}
        />
        <ProjectImage src={imgURL} />
      </ImgTitleWrapper>
    </ProjectWrapper>
  );
};

const ImgTitleWrapper = styled.div`
  position: relative;
  margin: ${({ side }) => (side === "right" ? "0 0 0 10vw" : "0 10vw 0 0")};

  right: ${({ side, offset }) => (side === "right" ? `${offset}vw` : "unset")};

  left: ${({ side, offset }) => (side === "left" ? `${offset}vw` : "unset")};

  transition: right 1.2s, opacity 1.2s, left 1.2s;

  -webkit-transition: right 1.2s, opacity 1.2s, left 1.2s;

  @media (max-width: 480px) {
    margin: 0 ${({ side }) => (side === "right" ? 0 : "auto")} 0
      ${({ side }) => (side === "right" ? "auto" : 0)};
  }
`;

const ProjectWrapper = styled.div`
  z-index: 5;
  opacity: ${({ offset }) => (offset ? 0 : 1)};
  position: relative;
  display: flex;
  flex-direction: ${({ side }) => (side === "right" ? "row" : "row-reverse")};
  margin: 4rem 0;
  justify-content: space-between;
  transition: opacity 1.5s;

  -webkit-transition: opacity 1.5s;

  @media (max-width: 480px) {
    flex-direction: column-reverse;
  }
`;

const ProjectTitle = ({ title, tagline, side, offset }) => {
  return (
    <TitleWrapper side={side} offset={offset}>
      <text.ProjectTagline>{tagline}</text.ProjectTagline>
      <text.ProjectTitle>{title}</text.ProjectTitle>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: ${({ side }) => (side === "right" ? "-10vw" : "unset")};
  right: ${({ side }) => (side === "right" ? "unset" : "-10vw")};
  top: 50%;

  right: ${({ side, offset }) =>
    side === "left" ? `-${offset + 10}vw` : "unset"};

  left: ${({ side, offset }) =>
    side === "right" ? `-${offset + 10}vw` : "unset"};

  transition: right 1.5s, opacity 1.5s, left 1.5s;

  -webkit-transition: right 1.5s, opacity 1.5s, left 1.5s;
`;

const ProjectDesc = styled.div`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 300;
  font-size: 1rem;
  margin: 0 1rem;
  opacity: ${({ show }) => (show ? 1 : 0)};
  display: flex;
  flex-direction: column-reverse;
  text-align: ${({ side }) => side};
  transition: opacity 0.5s;
  -webkit-transition: opacity 0.5s;
`;

const ProjectImage = styled.img`
  width: 15rem;
  height: 13rem;
`;
