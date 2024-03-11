import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderArea = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 150px;
  & button {
    font-size: 18px;
    color: #222;
    transition: color 0.2s ease-in-out;
    &:hover {
      color: #98927d;
    }
  }
`;
export const Logo = styled.h1`
  font-size: 60px;
  font-weight: 900;
  color: #98927d;
`;
export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;

export const Title = styled.h1`
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 600;
  color: #98927d;
  text-align: center;
`;
export const ImgWrap = styled.div`
  position: relative;
  width: 100%;
  & :after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ddd;
  }
`;
export const InputWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  max-width: 1000px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 40px;
  box-sizing: border-box;
  background-image: url(${(props) =>
    props.$link === "로그인" ? "bg2.jpg" : "bg3.jpg"});
  background-size: 46%;
  background-position: center right;
  background-repeat: no-repeat;
  box-shadow: 15px 15px 40px rgba(0, 0, 0, 0.1);
`;

export const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
export const InputStyle = styled.input`
  width: 100%;
  height: 60px;
  padding: 10px 15px;
  border: 1px solid #eee;
  border-radius: 8px;
  font-size: 18px;
  box-sizing: border-box;
  outline: none;
  color: #98927d;
  &::placeholder {
    color: #c3c0b4;
  }
`;
export const ButtonStyle = styled.button`
  position: relative;
  background: none;
  height: 60px;
  border: 1px solid #d1d1d1;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  background: transparent;
  color: #777;
  margin-top: 10px;
  overflow: hidden;
  transition: color 0.5s ease-in-out;
  z-index: 1;
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 0;
    height: 100%;
    background: #333;
    top: 0;
    left: 0;
    transition: width 0.5s ease-in-out;
    z-index: -1;
  }
  &:hover {
    color: #fff;
  }
  &:hover::after {
    width: 100%;
  }
`;
export const LinkButton = styled(Link)`
  text-align: center;
  height: 60px;
  line-height: 60px;
  border: 1px solid #eee;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 400;
  background-color: #e8e5dd;
  color: #736e5b;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #cfccc2;
  }
`;
