import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editTodos, getTodos } from "../redux/modules/toDos";
import styled from "styled-components";

const Detail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const todos = useSelector(({ todos }) => todos.todos);
  const [isDisabled, setIsDisabled] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editText, setEditText] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  useEffect(() => {
    const foundData = todos.find((item) => {
      return item.id === params.id;
    });
    if (foundData) {
      setEditTitle(foundData.title);
      setEditText(foundData.text);
    }
  }, [params.id, todos]);

  const onChangeEditTitle = (e) => {
    setEditTitle(e.target.value);
  };
  const onChangeEditText = (e) => {
    setEditText(e.target.value);
  };
  const onClickEdit = () => {
    setIsDisabled(!isDisabled);
    if (isDisabled) {
      dispatch(
        editTodos({
          title: editTitle,
          text: editText,
        })
      );
    }
  };
  return (
    <DetailPage>
      <InputForm>
        <TitleInput
          type="text"
          disabled={!isDisabled}
          value={editTitle}
          onChange={onChangeEditTitle}
        />
      </InputForm>
      <TextInput
        disabled={!isDisabled}
        value={editText}
        onChange={onChangeEditText}
      ></TextInput>
      <BtnWrap>
        <button onClick={() => navigate(-1)}>이전 페이지</button>
        <button onClick={onClickEdit}>{!isDisabled ? "수정" : "저장"}</button>
      </BtnWrap>
    </DetailPage>
  );
};

const DetailPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  margin-top: 40px;
  gap: 20px;
  border: 1px solid #beb9a5;
  padding: 40px;
  h2 {
    font-size: 60px;
    font-weight: 800;
    color: #fff;
  }
  p {
    font-size: 25px;
    color: #fff;
  }
`;
const InputForm = styled.form`
  display: block;
  width: 100%;
`;
const TitleInput = styled.input`
  display: block;
  width: 100%;
  height: 60px;
  padding: 15px 20px;
  background: #fff;
  font-size: 18px;
  &:disabled {
    background: #e4e2dc;
  }
`;
const TextInput = styled.textarea`
  width: 100%;
  height: 500px;
  padding: 20px;
  background: #fff;
  border: none;
  resize: none;
  box-sizing: border-box;
  font-size: 18px;
  &:disabled {
    background: #e4e2dc;
  }
`;
const BtnWrap = styled.div`
  display: flex;
  gap: 10px;
  button {
    min-width: 200px;
    margin-top: 20px;
    height: 60px;
    padding: 10px 25px;
    border-radius: 8px;
    border: 1px solid #98927d;
    color: #98927d;
    font-weight: 700;
    font-size: 20px;
    transition: all 0.1s ease-in-out;
    + button {
      background: #98927d;
      color: #fff;
    }
    &:hover {
      background: #98927d;
      color: #fff;
    }
  }
`;

export default Detail;
