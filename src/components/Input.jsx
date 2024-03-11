import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../redux/modules/toDos";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

const InputWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 20px;
  margin-top: 100px;
  label {
    font-size: 18px;
    color: #fff;
    font-weight: 500;
  }
  input {
    border-bottom: 1px solid #a7a688;
    background: transparent;
    width: 100%;
    padding: 15px 10px;
    font-size: 24px;
    color: #76755d;
    &::placeholder {
      color: #d4ceb6;
    }
  }
  button {
    background: #76755d;
    border-radius: 10px;
    padding: 10px 30px;
    font-size: 20px;
    font-weight: 700;
    color: #ffffff;
    @media (max-width: 800px) {
      margin-top: 20px;
      height: 60px;
    }
  }
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
const Input = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleDispatch = () => {
    if (title.trim() !== "" && text.trim() !== "") {
      const todo = {
        id: uuidv4(),
        title,
        text,
        isDone: false,
      };
      dispatch(addTodos(todo));
      setTitle("");
      setText("");
    } else {
      alert("제목과 내용을 입력해주세요.");
    }
  };
  const inputChangeTitle = (e) => setTitle(e.target.value);
  const inputChangeText = (e) => setText(e.target.value);

  return (
    <InputWrap>
      <label>
        <input
          type="text"
          placeholder="제목을 입력하세요."
          value={title}
          onChange={inputChangeTitle}
        ></input>
      </label>
      <label>
        <input
          type="text"
          placeholder="내용을 입력하세요."
          value={text}
          onChange={inputChangeText}
        ></input>
      </label>
      <button onClick={handleDispatch}>할일 추가</button>
    </InputWrap>
  );
};

export default Input;
