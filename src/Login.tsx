import { useState } from "react";
import { useMutation } from "react-query";
import { login } from "./actions/credential";
import ErrorMessage from "./components/ErrorMessage";
import "./Login.css";

const Login = (props: LoginProp) => {
  const [loginRequest] = useState<LoginRequest>({
    email: "",
    password: "",
  });

  /**
   * Mutate the login request
   */
  const loginMutation = useMutation<TokenProp, Error, LoginRequest>(login);

  // const { push } = useHistory(); 

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
      {loginMutation.isSuccess && (props.setToken(loginMutation.data))}

      <button onClick={() => loginMutation.mutate(loginRequest)}>Login</button>
    </div>
  );
};

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginProp {
  setToken: (token: TokenProp) => void;
}

interface TokenProp {
  access_token: string;
}

export default Login;
