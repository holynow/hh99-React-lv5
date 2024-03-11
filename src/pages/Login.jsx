import React from "react";
import useInput from "../hooks/useInput";
import { useNavigate, useLocation } from "react-router-dom";
import { login } from "../api/apis";
import { setCookie } from "../cookies/cookie";
import UserInput from "../components/UserInput";
import { ContentWrap } from "../styles/InputStyle";

const Login = () => {
  const router = useNavigate();
  const [id, onChangeId] = useInput();
  const [pw, onChangePw] = useInput();
  const isPath = useLocation().pathname.replace("/", "");
  const onClickLogin = async (e) => {
    e.preventDefault();
    try {
      const { token } = await login(id, pw);
      setCookie("accessToken", token);
      localStorage.setItem("access", token);
      alert("로그인에 성공하였습니다.");
      router("/");
    } catch (err) {
      alert(err.response.data.message);
    }
  };
  return (
    <>
      <ContentWrap>
        <UserInput
          id={id}
          pw={pw}
          onChangeId={onChangeId}
          onChangePw={onChangePw}
          onClick={onClickLogin}
          title={isPath === "login" ? "로그인" : "회원가입"}
          link={isPath === "login" ? "회원가입" : "로그인"}
        />
      </ContentWrap>
    </>
  );
};

export default Login;
