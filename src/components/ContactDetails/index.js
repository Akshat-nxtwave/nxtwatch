import React from "react";
import Logo from "../Logo";
import { Container, Heading, LogoContainer, Description } from "./styles";
import { useTranslation } from "react-i18next";

import { LOGO_MAPPING } from "../../utils/constants";
const ContactDetails = () => {
  const { t, i18n } = useTranslation(['mod2']);
  return (
    <Container>
      <Heading role="presentation" onClick={()=>i18n.language === 'en' ? i18n.changeLanguage('fr') : i18n.changeLanguage('en')}>{t('contact_us')}</Heading>
      <LogoContainer>
        {LOGO_MAPPING.map((logo) => (
          <Logo key={logo} url={logo} width="32px"/>
        ))}
      </LogoContainer>
      <Description>Enjoy! Now to see your channels and recommendations!</Description>
    </Container>
  );
};

export default ContactDetails;
