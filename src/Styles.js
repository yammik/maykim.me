import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  padding: 5rem;
`;

export const wrappers = {
  Blue: styled(ContentWrapper)`
    background-color: rgba(205, 218, 235, 0.3);
  `,
  Bluer: styled(ContentWrapper)`
    background-color: rgba(153, 179, 227, 0.3);
  `,
  BlueGreen: styled(ContentWrapper)`
    background-color: rgba(129, 177, 156, 0.3);
  `,
  Green: styled(ContentWrapper)`
    background-color: rgba(222, 233, 228, 0.3);
  `
};

export const EvenSpace = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
`;
export const Line = styled.div`
  height: ${({ thiccness }) => thiccness}px;
  background-color: rgb(118, 118, 118);
`;

const Bar = styled.div`
  width: 100%;
  height: 4px;
  border-radius: 16%;
  background-color: rgb(118, 118, 118);

  @media only screen and (max-width: 414px) {
    height: 2px;
  }
`;

export const Hamburger = () => (
  <HamburgerWrapper direction="column">
    <Bar />
    <Bar />
    <Bar />
  </HamburgerWrapper>
);

const HamburgerWrapper = styled(EvenSpace)`
  width: 30px;
  height: 28px;
  position: fixed;
  right: 0;

  @media only screen and (max-width: 414px) {
    width: 18px;
    height: 16px;
  }
`;

export const text = {
  Heading: styled.h2`
    font-family: "Josefin Sans", sans-serif;
    font-weight: 800;
    font-size: 3rem; /* 48 px */
    margin: 0;
  `,
  SubHeading: styled.h4`
    font-family: "Josefin Slab", serif;
    font-weight: 400;
    font-size: 1.4rem; /* 32 px */
    letter-spacing: 0rem;
    margin: 0;
  `,
  BigLetter: styled.span`
    font-family: "Josefin Sans", sans-serif;
    font-weight: bold;
    font-size: 3rem; /* 48 px */
    text-align: center;
  `
};
