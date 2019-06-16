import React from "react";
import styled from "styled-components";

const colors = {
  lBlue: "rgba(205, 218, 235, 0.3)",
  dBlue: "rgba(153, 179, 227, 0.3)",
  blueGreen: "rgba(129, 177, 156, 0.3)",
  green: "rgba(222, 233, 228, 0.3)",
  white: "rgba(255,255,255, 0.3)"
};

export const ContentWrapper = styled.div`
  padding: 5rem;
  padding-bottom: 0;
  z-index: -${({ order }) => order};
  position: relative;
  margin-bottom: 6rem;

  &:after {
    z-index: -${({ order }) => order};
    content: "";
    position: absolute;
    top: 0;
    bottom: 3rem;
    left: 0;
    width: 0;
    border-right: 100vw solid transparent;
  }
`;

const Wrapper = styled.div`
  bottom: -2rem;
  left: 0;
  position: absolute;
  padding: 5rem;
  padding-bottom: 0;
  margin-bottom: 6rem;
  right: 0;
  top: 0;
  z-index: -${({ order }) => order};

  &:after {
    z-index: -${({ order }) => order};
    content: "";
    position: absolute;
    top: ${({ slant }) => (slant === "top" ? 0 : `2rem`)};
    left: 0;
    width: 0;
    bottom: ${({ slant = "bottom" }) => (slant === "top" ? `-7rem` : `-10rem`)};
    border-left: ${({ slant = "bottom", color }) =>
      slant === "top" ? "none" : `100vw solid ${color}`};
    border-bottom: ${({ slant = "bottom" }) =>
      slant === "top" ? 0 : `6rem solid transparent`};
    border-right: ${({ slant = "bottom", color }) =>
      slant === "top" ? `100vw solid ${color}` : "none"};
    border-top: ${({ slant = "bottom" }) =>
      slant === "top" ? `6rem solid transparent` : 0};
  }
`;

export const wrappers = {
  BlueTail: props => (
    <Wrapper {...props} order={1} color={colors.lBlue}>
      {props.children}
    </Wrapper>
  ),
  BluerTail: props => (
    <Wrapper {...props} order={2} color={colors.dBlue}>
      {props.children}
    </Wrapper>
  ),
  BlueGreenTail: props => (
    <Wrapper {...props} order={3} color={colors.blueGreen}>
      {props.children}
    </Wrapper>
  ),
  GreenTail: props => (
    <Wrapper {...props} order={4} color={colors.green}>
      {props.children}
    </Wrapper>
  )
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
