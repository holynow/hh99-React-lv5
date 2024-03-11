import React from "react";
import styled from "styled-components";
import { HeaderArea, Logo } from "../styles/InputStyle";
import { removeCookie } from "../cookies/cookie";
import { useLocation, useNavigate } from "react-router-dom";

const Wrap = styled.div`
  position: relative;
  min-height: 100vh;
  position: relative;
  background: #eeece5;
`;
const ContentWrap = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  z-index: 10;
`;
const Layout = (props) => {
  const router = useNavigate();
  const onClickLogOut = () => {
    localStorage.removeItem("access");
    removeCookie("accessToken");
    router("/login");
  };
  const isPath = useLocation().pathname.replace("/", "");
  return (
    <Wrap>
      <ContentWrap>
        <HeaderArea>
          <Logo>itTodo</Logo>
          {isPath === "login" || isPath === "register" ? null : (
            <button onClick={onClickLogOut}>로그아웃</button>
          )}
        </HeaderArea>
        {props.children}
      </ContentWrap>
    </Wrap>
  );
};

export default Layout;
