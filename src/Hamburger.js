import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { HamburgerIcon } from "./svg/icons";

export default function Hamburger() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    menuIsOpen && setTimeout(() => setMenuIsOpen(false), 15 * 1000);
  }, [menuIsOpen]);

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
  background: rgba(255, 255, 255, 0.7);
  border-radius: 5px;
`;

const Wrapper = styled.div`
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 99;
`;

const StyledLi = styled.li`
  cursor: pointer;
  list-style: none;
  transition: color 0.3s ease-out;
  text-align: right;
  &:hover {
    color: rgba(153, 179, 227, 0.7);
  }
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;
