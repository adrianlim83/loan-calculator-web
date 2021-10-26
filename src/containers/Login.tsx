import { useState } from "react";
import { useMutation } from "react-query";
import { login, token } from "../actions/auth";
import Button from "../components/Button";
import ErrorMessage from "../components/ErrorMessage";
import Input from "../components/Input";
import Label from "../components/Label";
import styled from "styled-components";
import { mediaQuery } from "../components/MediaQuery";

// Styles contain login container and center form
const Styles = {
  Container: styled.div`
    display: table;
    margin: auto;
  `,

  Login: styled.div`
  width: fit-content;
  height: min-content;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: grid;
  vertical-align: middle;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0px 0px 8px 5px rgba(0, 0, 0, 0.4);

  ${mediaQuery("tablet")`
    width: 35%;
  `};
`
}

const Login = () => {
  const [loginRequest] = useState<LoginRequest>({
    email: "",
    password: "",
  });

  /**
   * Mutate the login request
   */
  const loginMutation = useMutation<TokenProp, Error, LoginRequest>(token);

  return (
    <Styles.Container>
      <Styles.Login>
        <Label value="Email" />
        <Input
          name="email"
          onChangeEvent={(v) => (loginRequest.email = v)}
          required={true}
        />
        <Label value="Password" />
        <Input
          type="password"
          name="password"
          onChangeEvent={(v) => (loginRequest.password = v)}
          required={true}
        />

        {loginMutation.isLoading && <div>Loading...</div>}
        {loginMutation.isError && (
          <ErrorMessage message={loginMutation.error.message} />
        )}
        {loginMutation.isSuccess && login(loginMutation.data)}
        <Button
          value="Login"
          onClick={() => loginMutation.mutate(loginRequest)}
        />
      </Styles.Login>
    </Styles.Container>
  );
};

interface LoginRequest {
  email: string;
  password: string;
}

interface TokenProp {
  access_token: string;
  refresh_token: string;
}

export default Login;
