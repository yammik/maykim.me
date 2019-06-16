import React from "react";
import styled from "styled-components";

const colors = {
  lBlue: "rgba(205, 218, 235, 0.6)",
  lBlueFaded: "rgba(205, 218, 235, 0.3)",
  dBlue: "rgba(153, 179, 227, 0.6)",
  dBlueFaded: "rgba(153, 179, 227, 0.3)",
  blueGreen: "rgba(129, 177, 156, 0.6)",
  blueGreenFaded: "rgba(129, 177, 156, 0.3)",
  green: "rgba(222, 233, 228, 0.6)",
  greenFaded: "rgba(222, 233, 228, 0.3)",
  white: "rgba(255,255,255, 0.6)",
  whiteFaded: "rgba(255,255,255, 0.3)"
};

const ContentWrapper = styled.div`
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

const OverlayWrapper = styled.div`
  bottom: -3rem;
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
    top: 0;
    left: 0;
    width: 0;
    bottom: -${({ bottom }) => bottom}vw;
    border-left: 100vw solid ${({ color }) => color};
    border-bottom: ${({ height }) => height}vw solid transparent;
  }
`;

export const wrappers = {
  Blue: props => (
    <ContentWrapper order={1} color={colors.lBlue}>
      {props.children}
    </ContentWrapper>
  ),
  BlueOverlay: props => (
    <OverlayWrapper {...props} order={1} color={colors.lBlueFaded}>
      {props.children}
    </OverlayWrapper>
  ),
  Bluer: props => (
    <ContentWrapper order={2} color={colors.dBlue}>
      {props.children}
    </ContentWrapper>
  ),
  BluerOverlay: props => (
    <OverlayWrapper order={2} color={colors.dBlueFaded}>
      {props.children}
    </OverlayWrapper>
  ),
  BlueGreen: props => (
    <ContentWrapper order={3} color={colors.blueGreen}>
      {props.children}
    </ContentWrapper>
  ),
  BlueGreenOverlay: props => (
    <OverlayWrapper order={3} color={colors.blueGreenFaded}>
      {props.children}
    </OverlayWrapper>
  ),
  Green: props => (
    <ContentWrapper order={4} color={colors.green}>
      {props.children}
    </ContentWrapper>
  ),
  GreenOverlay: props => (
    <OverlayWrapper order={4} color={colors.greenFaded}>
      {props.children}
    </OverlayWrapper>
  ),
  White: props => (
    <ContentWrapper order={5} color={colors.white}>
      {props.children}
    </ContentWrapper>
  ),
  WhiteOverlay: props => (
    <OverlayWrapper order={5} color={colors.whiteFaded}>
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
