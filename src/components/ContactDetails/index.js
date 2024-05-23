import React from "react";
import Logo from "../Logo";
import { Container, Heading, LogoContainer, Description } from "./styles";
import { LOGO_MAPPING } from "../../utils/constants";
const ContactDetails = () => {
  return (
    <Container>
      <Heading>CONTACT US</Heading>
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
