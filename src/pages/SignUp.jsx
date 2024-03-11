import React from "react";
import useInput from "../hooks/useInput";
import { useLocation, useNavigate } from "react-router-dom";
import { signup } from "../api/apis";
import UserInput from "../components/UserInput";
import { ContentWrap } from "../styles/InputStyle";

const SignUp = () => {
  const router = useNavigate();
  const [id, onChangeId] = useInput();
  const [pw, onChangePw] = useInput();
  const isPath = useLocation().pathname.replace("/", "");
  const onClickSignUp = async (e) => {
    e.preventDefault();
    try {
      await signup(id, pw);
      alert("회원가입에 성공하였습니다.");
      router("/login");
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
          onClick={onClickSignUp}
          title={isPath === "login" ? "로그인" : "회원가입"}
          link={isPath === "login" ? "회원가입" : "로그인"}
        />
      </ContentWrap>
    </>
  );
};

export default SignUp;
