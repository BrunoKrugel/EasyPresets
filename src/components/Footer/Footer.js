import React from 'react';
import { Link } from '../../styles/GlobalComponents';
import { CompanyContainer, FooterWrapper, Slogan, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>© 2021 <Link href="/policy">  Easy Presets.</Link>Todos os direitos reservados.</Slogan>
          <Slogan>Este site não faz parte da plataforma ou da empresa Facebook. Além disso, esse site não é endossado pelo Facebook em qualquer aspecto.</Slogan>
        </CompanyContainer>
      </SocialIconsContainer>

    </FooterWrapper>
  );
};

export default Footer;
