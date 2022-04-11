import React from 'react';
import Image from 'next/image';
import { FooterImage } from '../../constants/constants';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, ImageContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+5591987485395">+55 91 987485395</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:feliperubenmv@gmail.com">
            feliperubenmv@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Created with love by Felipe Cunha</Slogan>
        </CompanyContainer>
        <ImageContainer>
          <LinkItem target="_blank" href="https://www.linkedin.com/in/feliperubencunha/">
            <Image 
              src={FooterImage.image}
              alt="Picture of the author"
              width={150}
              height={200}
            />
          </LinkItem>
        </ImageContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
