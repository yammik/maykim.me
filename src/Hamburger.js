import React from "react";
import styled from "styled-components";

import { Hamburger as Icon } from "./svg/icons";

export default function Hamburger() {
  return (
    <HamburgerWrapper>
      <StyledIcon />
    </HamburgerWrapper>
  );
}

const StyledIcon = styled(Icon)`
  width: 1.4rem;
`;

const HamburgerWrapper = styled.div`
  margin: 4rem 3rem;
  position: fixed;
  right: 0;
`;
