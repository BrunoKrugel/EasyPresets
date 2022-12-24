import React from 'react';
import { CompanyContainer, FooterWrapper, Slogan, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Este site não faz parte da plataforma ou da empresa Facebook. Além disso, esse site não é endossado pelo Facebook em qualquer aspecto.</Slogan>
        </CompanyContainer>
      </SocialIconsContainer>

    </FooterWrapper>
  );
};

export default Footer;
