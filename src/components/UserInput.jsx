import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  InputForm,
  InputWrap,
  Title,
  InputStyle,
  ButtonStyle,
  LinkButton,
} from "../styles/InputStyle";
const UserInput = ({ id, pw, onChangeId, onChangePw, onClick, title, link }) => {
  const router = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("access")) {
      router("/");
    }
  }, [router]);
  return (
    <InputWrap $link={link}>
      <InputForm action="">
        <Title>{title}</Title>
        <InputStyle
          type="text"
          placeholder="아이디"
          value={id}
          onChange={onChangeId}
        />
        <InputStyle
          type="password"
          placeholder="비밀번호"
          value={pw}
          onChange={onChangePw}
        />
        <ButtonStyle onClick={onClick}>{title}</ButtonStyle>
        <LinkButton to={link === "로그인" ? "/login" : "/register"}>
          {link}&nbsp;할래요
        </LinkButton>
      </InputForm>
    </InputWrap>
  );
};

export default UserInput;
