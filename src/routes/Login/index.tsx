import React, { useState, useContext, useEffect } from "react";
import {
  Container,
  FormContainer,
  Button,
  Title,
  InputField,
  Checkbox,
  ErrorMsg,
} from "./styles";
import { TailSpin } from "react-loader-spinner";
import Logo from "../../components/Logo";
import { StoreContext } from "../../utils/ContextUtils";
import useRequest from "../../hooks/useRequest";
import { useNavigate, useSearchParams } from "react-router-dom";

const Login = () => {
  const val = useContext(StoreContext);
  const navigate = useNavigate();
  const [getParamsFunction] = useSearchParams();
  const paramsPath = getParamsFunction.get("from");

  const { data, error, loading, refetch } = useRequest({
    url: "https://apis.ccbp.in/login/",
    method: "POST",
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [show, setShow] = useState(false);
  const onSubmit = async () => {
    await refetch({ username, password });
  };

  useEffect(() => {
    if (document.cookie.includes("jwtToken")) {
      navigate(paramsPath || "/");
    }
  }, []);

  useEffect(() => {
    if (data && (error === null || !error)) {
      document.cookie = `jwtToken=${data?.jwt_token}`;
      navigate(paramsPath || "/");
    }
  }, [data, error]);

  return (
    <Container>
      <FormContainer isDark={val.store.isDark}>
        <Logo
          style={{ padding: "40px 10px 60px" }}
          width="200px"
          url={`https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-${
            val.store.isDark ? "dark" : "light"
          }-theme-img.png`}
        ></Logo>
        <Title>USERNAME</Title>
        <InputField
          id="loginUsername"
          isDark={val.store.isDark}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></InputField>
        <Title>PASSWORD</Title>
        <InputField
          id="loginPassword"
          isDark={val.store.isDark}
          type={show ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></InputField>

        <Checkbox>
          <input
            id="showPassword"
            type="checkbox"
            checked={show}
            onChange={() => setShow((prev) => !prev)}
          ></input>
          <label htmlFor="show-password">Show Password</label>
        </Checkbox>
        <Button id="loginSubmit" disabled={loading} onClick={onSubmit}>
          {loading ? (
            <TailSpin
              visible={true}
              height="18"
              width="20"
              color="#fff"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
            />
          ) : (
            "Login"
          )}
        </Button>
        {error ? (
          <ErrorMsg>*Username and Password do not match</ErrorMsg>
        ) : null}
      </FormContainer>
    </Container>
  );
};

export default Login;