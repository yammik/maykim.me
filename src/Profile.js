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
import { Paragraph, Block } from "./About";

export default function Profile() {
  const data = [
    {
      title: "Education",
      icon: null,
      contents: [
        {
          title: "Binghamton University",
          body: "Graduate program in Biology"
        },
        {
          title: "Binghamton University",
          body: "Biology major, Linguistics minor"
        },
        {
          title: "LaGuardia High School",
          body: "Studio art major"
        }
      ]
    },
    {
      title: "Experience",
      icon: null,
      contents: [
        {
          title: "Parsec Gaming",
          body: "Junior software engineer"
        },
        {
          title: "Binghamton University",
          body: "Graduate teaching assistant"
        },
        {
          title: "Binghamton University",
          body: "Graduate research assistant"
        }
      ]
    }
  ];

  return (
    <ContentWrapper>
      <SectionHeaderWrapper>
        <SectionNumber>03</SectionNumber>
        <CoolLine />
        <text.Heading>Profile</text.Heading>
      </SectionHeaderWrapper>
      <SectionBodyWrapper>
        <Bio />
        <ButtonsWrapper>
          <StyledButtons>Get in touch</StyledButtons>
          <StyledButtons>Download resume</StyledButtons>
        </ButtonsWrapper>
        <ProfileItemsWrapper>
          {data.map(section => {
            return <ProfileSection section={section} />;
          })}
          <Skills />
        </ProfileItemsWrapper>
      </SectionBodyWrapper>
    </ContentWrapper>
  );
}

const Bio = () => {
  return (
    <StyledParagraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </StyledParagraph>
  );
};

const ProfileSection = ({ section }) => {
  const { title, contents } = section;
  return (
    <SectionWrapper>
      <Block />
      <SectionTitle>{title}</SectionTitle>
      {contents.map(content => {
        return (
          <ItemBodyWrapper>
            <Subheading>{content.title}</Subheading>
            <Desc>{content.body}</Desc>
          </ItemBodyWrapper>
        );
      })}
    </SectionWrapper>
  );
};

const Skills = () => {
  const skills = [
    {
      name: "Coding",
      list: [
        "Javascript",
        "ReactJS",
        "GraphQL",
        "Golang",
        "React Native",
        "Swift",
        "Ruby",
        "Rails",
        "HTML5",
        "CSS3",
        "Googling"
      ]
    },
    {
      name: "Miscellaneous",
      list: [
        "Making macarons",
        "Doodling",
        "Crying to sleep",
        "Meme sharing",
        "Microwaving leftovers",
        "Boiling water",
        "Killing conversations"
      ]
    }
  ];

  return (
    <SkillsWrapper>
      <Block />
      <SectionTitle>Skills</SectionTitle>
      {skills.map(skill => (
        <ItemBodyWrapper>
          <SkillName>{skill.name}</SkillName>
          <SkillList>
            {skill.list.map(s => (
              <SkillListItem>{s}</SkillListItem>
            ))}
          </SkillList>
        </ItemBodyWrapper>
      ))}
    </SkillsWrapper>
  );
};

const SkillList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 2rem;
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
`;

const SkillListItem = styled.li`
  font-weight: 300;
  font-size: 1rem;
`;

const SectionTitle = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
`;

const Subheading = styled.div`
  font-size: 1rem;
  font-weight: 400;
`;

const SkillName = styled(Subheading)`
  border-bottom: 1px solid #767676;
`;

const Desc = styled.div`
  font-weight: 300;
  font-size: 0.8rem;
  line-height: 2rem;
`;

const SectionWrapper = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

const SkillsWrapper = styled(SectionWrapper)`
  flex-basis: 150%;
`;

const ProfileItemsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 4rem;
  align-items: left;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 4rem 0;
  text-align: center;
`;

const StyledButtons = styled.button`
  background: none;
  border: 1px solid #2187ff;
  color: #2187ff;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 5px;
  width: 12rem;
  height: 3rem;
  margin: 1rem;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0 6vw;
  align-items: center;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const ItemBodyWrapper = styled.div`
  margin: 1rem 0;
`;
