import React from "react";
import { Button } from "../Styles/Button.styled";
import { Container } from "../Styles/Container.styled";
import { Flex } from "../Styles/Flex.styled";
import { Image, Logo, Nav, StyledHeader } from "../Styles/Header.styled";

function Header() {
  return (
    <StyledHeader bg="red">
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="" />
          <Button>Try it free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build the community your fans will love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <Button bg="#ff0099" color="#fff">
              Get started for free
            </Button>
          </div>
          <Image src="./images/illustration-mockups.svg" alt="" />
        </Flex>
      </Container>
    </StyledHeader>
  );
}

export default Header;
