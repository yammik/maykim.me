import React, { useRef, useEffect, useState } from "react";
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

export const SectionHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: 0;
  margin-left: 36%;
`;

const Line = styled.div`
  width: ${({ width = 0 }) => `${width}rem`};
  border-bottom: 1px solid #767676;
  transition: width 1.2s ease-in-out;
  margin-bottom: 1rem;
`;

export function CoolLine() {
  const ref = useRef();
  const [lineWidth, setLineWidth] = useState(0);

  useEffect(() => {
    function checkPos() {
      const { y } = ref.current.getBoundingClientRect();
      if (window.innerHeight > y && y > 0) {
        setLineWidth(10);
      } else {
        setLineWidth(0);
      }
    }

    checkPos();
    window.addEventListener("scroll", checkPos);

    return () => {
      window.removeEventListener("scroll", checkPos);
    };
  }, []);

  return <Line ref={ref} width={lineWidth} />;
}

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
    bottom: ${({ slant = "bottom" }) => (slant === "top" ? `-7rem` : `-12rem`)};
    border-left: ${({ slant = "bottom", color }) =>
      slant === "top" ? "none" : `100vw solid ${color}`};
    border-bottom: ${({ slant = "bottom" }) =>
      slant === "top" ? 0 : `12rem solid transparent`};
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

export const text = {
  Heading: styled.h2`
    font-family: "Josefin Slab", serif;
    font-weight: 600;
    font-size: 2.4rem; /* 48 px */
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

export const SectionNumber = styled.div`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 200;
`;
