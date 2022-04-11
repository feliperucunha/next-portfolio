import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { NavbarContainer, Div1, Div2, Div3, NavLink, SocialIcons, Span, ATag } from './HeaderStyles';

const Header = () =>  {
  const scrollToHash = props => {
    const element = document.querySelector(`#${props}`);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  };

  return (
    <NavbarContainer>
      <Div1>
        <Link href="/">
          <ATag>
            <DiCssdeck size="3rem" /> <Span>Felipe Cunha</Span>
          </ATag>
        </Link>
      </Div1>
      <Div2>
        <li>
          <a onClick={() => scrollToHash('projects')}>
            <NavLink>Projects</NavLink>
          </a>
        </li>
        <li>
          <a onClick={() => scrollToHash('tech')}>
            <NavLink>Technologies</NavLink>
          </a>
        </li>
        <li>
          <a onClick={() => scrollToHash('about')}>
            <NavLink>About</NavLink>
          </a>
        </li>
      </Div2>
      <Div3>
        <SocialIcons target="_blank" href="https://github.com/feliperucunha">
          <AiFillGithub size={30} />
        </SocialIcons>
        <SocialIcons target="_blank" href="https://www.linkedin.com/in/feliperubencunha/">
          <AiFillLinkedin size={30} />
        </SocialIcons>
        <SocialIcons target="_blank" href="https://www.instagram.com/feliperubeen">
          <AiFillInstagram size={30} />
        </SocialIcons>
      </Div3>
    </NavbarContainer>
  )
};

export default Header;
