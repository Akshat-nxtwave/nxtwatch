import React from "react";
import { Container, LogoContainer, Text, Button } from "./styles";
import { RxCross2 } from "react-icons/rx";
import Logo from "../Logo";

const CardContainer = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo
          style={{ width: "75%" }}
          width="250px"
          url={`https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png`}
        />
        <RxCross2 size="16px" style={{ cursor: "pointer" }} />
      </LogoContainer>
      <Text>Buy Nxt Watch Premium prepaid plans with UPI</Text>
      <Button>GET IT NOW</Button>
    </Container>
  );
};

export default CardContainer;
