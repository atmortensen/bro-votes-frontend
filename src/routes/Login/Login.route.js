import React from "react";
import styled from "styled-components";
import { Input, Button } from "semantic-ui-react";

const View = styled.div`
  margin: 0;
  width: 100vw;
  height: 100vh;
  background: #ff785a;
  display: flex;
`;

const LoginContainer = styled.div`
  margin auto;
  border-radius: 5px;
  background-color: #ffffff;
  width: 100%;
  max-width: 300px;
`;

const Logo = styled.img`
  margin: auto;
  max-width: 100%;
  display: block;
`;

function Login(props) {
  return (
    <View>
      {/* <div>
        <Logo
          src="https://s3-us-west-2.amazonaws.com/name-tba/logo.png"
          alt="bro-votes-logo"
        />
        </div> 
        */}

      <LoginContainer>
        <div style={{ margin: "auto", padding: 16 }}>
          <Input fluid placeholder="username" />
          <br />
          <Input fluid placeholder="password" />
          <br />
          <Button fluid color="twitter">
            Login
          </Button>
        </div>
      </LoginContainer>

      <div style={{ position: "absolute", left: "48%", bottom: 10 }}>
        <a href="/sign-up" style={{ color: "#FFFFFF" }}>
          sign up
        </a>
      </div>
    </View>
  );
}

export default Login;
