import React, { useState } from "react";
import styled, { css } from "styled-components";

import { HamburgerIcon } from "./svg/icons";

export default function Hamburger() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Wrapper>
      <HamburgerWrapper onClick={() => setMenuIsOpen(!menuIsOpen)}>
        <HamburgerIcon />
      </HamburgerWrapper>
      <MenuWrapper open={menuIsOpen}>
        <MenuItem title="about" />
        <MenuItem title="projects" />
        <MenuItem title="profile" />
        <MenuItem title="gallery" />
        <MenuItem title="contact" />
      </MenuWrapper>
    </Wrapper>
  );
}

function MenuItem({ title }) {
  function handleClick() {
    const el = document.getElementById(title);
    el && el.scrollIntoView({ behavior: "smooth" });
  }
  return <StyledLi onClick={handleClick}>{title}</StyledLi>;
}

const HamburgerWrapper = styled.div`
  top: 2rem;
  right: 2rem;
  z-index: 99;
  line-height: 0;
  margin-left: auto;
  width: min-content;
`;

const MenuWrapper = styled.ul`
  transform: scaleY(${({ open }) => (open ? 1 : 0)});
  top: 0;
  right: 0;
  padding: 1rem;
  margin: 0;
  transition: transform 0.2s ease-out;
`;

const Wrapper = styled.div`
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 99;
`;

const StyledLi = styled.li`
  list-style: none;
  transition: transform 0.1s ease-out;
  text-align: right;
  &:hover {
    transform: scale(1.2);
  }
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;
