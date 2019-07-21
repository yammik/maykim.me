import styled from "styled-components";
import { ReactComponent as Hamburger } from "./hamburger.svg";
import { ReactComponent as Email } from "./email.svg";
import { ReactComponent as GitHub } from "./github.svg";
import { ReactComponent as LinkedIn } from "./linkedin.svg";
import { ReactComponent as Twitter } from "./twitter.svg";

export const HamburgerIcon = styled(Hamburger)`
  width: 1.4rem;
  cursor: pointer;
  fill: #767676;
  transition: fill 0.4s ease-out;

  &:hover {
    fill: #777777;
  }
`;

export const GitHubSmall = styled(GitHub)`
  width: 1rem;
  height: 1rem;
  margin: 0.4rem;
`;

export const EmailSmall = styled(Email)`
  width: 1rem;
  height: 1rem;
  margin: 0.4rem;
`;

export const LinkedInSmall = styled(LinkedIn)`
  width: 1rem;
  margin: 0.4rem;
  height: 1rem;
`;

export const TwitterSmall = styled(Twitter)`
  height: 1rem;
  margin: 0.4rem;
  width: 1rem;
`;
