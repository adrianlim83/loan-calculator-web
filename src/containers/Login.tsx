import { useState } from "react";
import { useMutation } from "react-query";
import { login, token } from "../actions/auth";
import Button from "../components/Button";
import ErrorMessage from "../components/ErrorMessage";
import Input from "../components/Input";
import Label from "../components/Label";
import "./Login.css";

const Login = () => {
  const [loginRequest] = useState<LoginRequest>({
    email: '',
    password: ''
  });

  /**
   * Mutate the login request
   */
  const loginMutation = useMutation<TokenProp, Error, LoginRequest>(token);

  return (
    <div className="login-group">
      <div className="login-form shadow-box">
        <Label value='Email'/>
        <Input
          name="email"
          onChangeEvent={(v) => (loginRequest.email = v)}
          required={true}
        />
        <Label value='Password'/>
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
      </div>
    </div>
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
