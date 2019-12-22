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

export default function Projects() {
  const projects = [
    {
      title: "Lunch Roulette",
      desc: (
        <DescWrapper>
          <p>
            Another restaurant finder app, but with less options for a reason:
            choice paralysis. Sometimes your best option is to just go with it.
          </p>
          <p>Check out danger mode if you're feeling...well...dangerous.</p>
          <p>Uses React, Styled Components, and Yelp API.</p>
        </DescWrapper>
      ),
      tagline: "for the indecisive",
      imgURL:
        "https://www.google.com/logos/doodles/2019/2019-womens-world-cup-day-14-5612233271279616-s.png"
    },
    {
      title: "SandboCSS",
      desc: (
        <DescWrapper>
          <p>Yup that's a pun. (hahahahah)</p>
          <p>
            CSS is overwhelming with its many properties and parents and
            children and flow and flex and and and whaaaat?
          </p>
          <p>
            You can play around with each property independently, see what
            values are available for each, with nested divs and all. Totally
            codeless.
          </p>
          <p>
            Built with React, Styled Components, RnD, and
            react-copy-to-clipboard.
          </p>
        </DescWrapper>
      ),
      tagline: "Codeless CSS sandbox",
      imgURL:
        "https://www.google.com/logos/doodles/2019/2019-womens-world-cup-day-14-5612233271279616-s.png"
    },
    {
      title: "Wanderlost",
      desc: (
        <DescWrapper>
          <p>
            When I was a grad student, I wanted to see the world like all of my
            friends were, but I had no time or money to scratch my wanderlust.
          </p>
          <p>
            So I virtually traveled the world via Google Maps streetview. It's
            basically the same thing, man. Shut up, it's not pathetic. What? I'm
            not crying, you're crying...
          </p>
          <p>
            In this app, you are a random person dropped off in a random region
            in the world (where streetview is available), with variable stats.
            Your goal is to find a randomly designated destination with a
            limited number of steps.
          </p>
          <p>Uses Javascript, and Google Maps API.</p>
        </DescWrapper>
      ),
      tagline: "cost/time-efficient way to see the world",
      imgURL:
        "https://www.google.com/logos/doodles/2019/2019-womens-world-cup-day-14-5612233271279616-s.png"
    }
  ];

  return (
    <ContentWrapper id="projects">
      <SectionHeaderWrapper>
        <SectionNumber>02</SectionNumber>
        <CoolLine />
        <text.Heading>Projects</text.Heading>
      </SectionHeaderWrapper>
      <SectionBodyWrapper>
        {projects.map((project, i) => {
          return (
            <ProjectItem
              key={`proj-${i}`}
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
  overflow: hidden;
  z-index: 5;
  opacity: ${({ offset }) => (offset ? 0 : 1)};
  position: relative;
  display: flex;
  flex-direction: ${({ side }) => (side === "right" ? "row" : "row-reverse")};
  margin: 6rem 0;
  justify-content: space-between;
  transition: opacity 1.5s;
  /* height: fit-content; */
  -webkit-transition: opacity 1.5s;

  @media (max-width: 640px) {
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
  text-align: ${({ side }) => (side === "right" ? "left" : "right")};
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

  @media (max-width: 640px) {
    margin: 1rem 0;
  }
`;

const ProjectImage = styled.img`
  width: 480px;

  @media (max-width: 1024px) {
    width: 300px;
  }
  @media (max-width: 840px) {
    width: 240px;
  }
`;

const DescWrapper = styled.div`
  flex-direction: column;
`;
