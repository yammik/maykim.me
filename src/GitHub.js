import React from "react";
import styled from "styled-components";

import { GitHub as Icon } from "./svg/icons";

export default function GitHub() {
  return (
    <GitHubWrapper>
      <StyledIcon />
    </GitHubWrapper>
  );
}

const StyledIcon = styled(Icon)`
  width: 1.4rem;
`;

const GitHubWrapper = styled.div`
  margin: 1rem;
  position: fixed;
  right: 0;
`;
