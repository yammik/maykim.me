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
  margin: 4rem 3rem;
  position: fixed;
  right: 0;
`;
