import React, { useState } from "react";
import styled from "styled-components";
import { Input, Button } from "semantic-ui-react";
import logo from "../../assets/bros-login.png";
import { colors } from "helpers/theme.helper";

const View = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${colors.secondaryAccent};
`;

const HeaderContainer = styled.div`
  display: flex;
  height: 50vh;
  margin: auto;
  justify-content: center;
  align-items: flex-end;
  text-align: center;
`;

const LoginContainer = styled.div`
  margin auto;
  border-radius: 10px;
  background-color: #ffffff;
  width: 100%;
  max-width: 300px;
`;

const FooterContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  bottom: 20px;
`;

const Logo = styled.img`
  max-width: 100%;
  display: block;
  margin-bottom: 40px;
`;

function SignUp(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View>
      <HeaderContainer>
        <Logo src={logo} alt="bro-vote-logo" />
      </HeaderContainer>

      <LoginContainer>
        <div style={{ margin: "auto", padding: 24 }}>
          <Input
            fluid
            placeholder="username"
            onChange={e => setUsername(e.target.value)}
          />
          <br />

          <Input
            fluid
            placeholder="password"
            onChange={e => setPassword(e.target.value)}
          />
          <br />

          <Input
            fluid
            placeholder="confirm password"
            onChange={e => setConfirmPassword(e.target.value)}
          />
          <br />

          <Button fluid color="yellow">
            Sign Up
          </Button>
        </div>
      </LoginContainer>

      <FooterContainer>
        <a href="/" style={{ color: "#FFFFFF" }}>
          login
        </a>
      </FooterContainer>
    </View>
  );
}

export default SignUp;
