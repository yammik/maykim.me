import React from "react";
import styled from "styled-components";

import { HamburgerIcon } from "./svg/icons";

export default function Hamburger() {
  return (
    <HamburgerWrapper>
      <HamburgerIcon />
    </HamburgerWrapper>
  );
}

const HamburgerWrapper = styled.div`
  top: 4rem;
  right: 2rem;
  position: fixed;
  z-index: 99;
`;
