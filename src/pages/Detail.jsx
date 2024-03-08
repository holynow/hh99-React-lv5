import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components';

const DetailPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  margin-top: 40px;
  gap: 20px;
  border: 1px solid #ddd;
  h2 {
    font-size: 60px;
    font-weight: 800;
    color: #fff;
  }
  p {
    font-size: 25px;
    color: #fff;
  }
  button {
    margin-top: 20px;
    padding: 10px 25px;
    border: 2px solid #fff;
    color: #fff;
    font-size:20px
  }
`

const Detail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const todos = useSelector(({todos})=> todos.todos)

  const foundData = todos.find((item)=>{
    return item.id === params.id
  })

  return (
    <DetailPage>
      <h2>{foundData.title}</h2>
      <p>{foundData.text}</p>
      <button onClick={()=>navigate(-1)}>이전 페이지</button>
    </DetailPage>
  )
}

export default Detail