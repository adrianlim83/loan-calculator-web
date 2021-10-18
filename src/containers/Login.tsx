import { useState } from "react";
import { useMutation } from "react-query";
import { login, token } from "../actions/auth";
import ErrorMessage from "../components/ErrorMessage";
import "./Login.css";

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
    <div className="login-form">
      <label>Email</label>
      <input
        type="text"
        onChange={(e) => (loginRequest.email = e.target.value)}
        required
      />
      <label>Password</label>
      <input
        type="password"
        onChange={(e) => (loginRequest.password = e.target.value)}
        required
      />

      {loginMutation.isLoading && <div>Loading...</div>}
      {loginMutation.isError && (
        <ErrorMessage message={loginMutation.error.message} />
      )}
      {loginMutation.isSuccess && login(loginMutation.data)}

      <button onClick={() => loginMutation.mutate(loginRequest)}>Login</button>
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
