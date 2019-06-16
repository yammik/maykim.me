import React from "react";
import styled from "styled-components";

const colors = {
  lBlue: "rgba(205, 218, 235, 0.3)",
  dBlue: "rgba(153, 179, 227, 0.3)",
  blueGreen: "rgba(129, 177, 156, 0.3)",
  green: "rgba(222, 233, 228, 0.3)",
  white: "#fff"
};

const ContentWrapper = styled.div`
  padding: 5rem;
  padding-bottom: 0;
  background-color: ${({ color }) => color};
  z-index: -${({ order }) => order};
  position: relative;
  margin-bottom: 6rem;

  &:after {
    z-index: -${({ order }) => order};
    content: "";
    position: absolute;
    bottom: -10vw;
    left: 0%;
    width: 0;
    height: 0;
    border-right: 100vw solid transparent;
    border-top: 10vw solid ${({ color }) => color};
  }
`;

const OverlayWrapper = styled(ContentWrapper)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: -2;
  padding: 5rem;

  &:after {
    bottom: -26vw;
    border-top: 26vw solid ${({ color }) => color};
  }
`;

export const wrappers = {
  Blue: props => (
    <ContentWrapper order={1} color={colors.lBlue}>
      {props.children}
    </ContentWrapper>
  ),
  BlueOverlay: props => (
    <OverlayWrapper order={1} color={colors.lBlue}>
      {props.children}
    </OverlayWrapper>
  ),
  Bluer: props => (
    <ContentWrapper order={2} color={colors.dBlue}>
      {props.children}
    </ContentWrapper>
  ),
  BluerOverlay: props => (
    <OverlayWrapper order={2} color={colors.dBlue}>
      {props.children}
    </OverlayWrapper>
  ),
  BlueGreen: props => (
    <ContentWrapper order={3} color={colors.blueGreen}>
      {props.children}
    </ContentWrapper>
  ),
  BlueGreenOverlay: props => (
    <OverlayWrapper order={3} color={colors.blueGreen}>
      {props.children}
    </OverlayWrapper>
  ),
  Green: props => (
    <ContentWrapper order={4} color={colors.green}>
      {props.children}
    </ContentWrapper>
  ),
  GreenOverlay: props => (
    <OverlayWrapper order={4} color={colors.green}>
      {props.children}
    </OverlayWrapper>
  ),
  White: props => (
    <ContentWrapper order={5} color={colors.white}>
      {props.children}
    </ContentWrapper>
  ),
  WhiteOverlay: props => (
    <OverlayWrapper order={5} color={colors.white}>
      {props.children}
    </OverlayWrapper>
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
