import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Input, Button, Message } from 'semantic-ui-react';
import logo from '../../assets/bros-login.png';
import { colors } from 'helpers/theme.helper';
import http from 'helpers/http.helper';
import { BroContext } from 'contexts/Bro.context';
import { Link } from 'react-router-dom';

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

function Login(props) {
  const [handle, setHandle] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setBro } = useContext(BroContext);

  const login = () => {
    http()
      .post(`/bros/sign-in`, {
        handle: handle,
        password: password
      })
      .then(res => {
        window.localStorage.setItem('token', res.token);
        setBro(res);
      })
      .catch(err => setError(err));
  };

  return (
    <View>
      <HeaderContainer>
        <Logo src={logo} alt="bro-vote-logo" />
      </HeaderContainer>

      <LoginContainer>
        <div style={{ margin: 'auto', padding: 24 }}>
          {error && <Message color="red">{error}</Message>}
          <Input
            fluid
            error={error ? true : false}
            placeholder="username"
            onChange={e => setHandle(e.target.value)}
          />
          <br />
          <Input
            fluid
            error={error ? true : false}
            type="password"
            placeholder="password"
            onChange={e => setPassword(e.target.value)}
          />
          <br />
          <Button fluid color="yellow" onClick={login}>
            Login
          </Button>
        </div>
      </LoginContainer>

      <FooterContainer>
        <Link to="/sign-up" style={{ color: '#FFFFFF' }}>
          sign up
        </Link>
      </FooterContainer>
    </View>
  );
}

export default Login;
