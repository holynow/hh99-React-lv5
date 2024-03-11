import React, { useEffect } from 'react'
import ToDoList from 'components/ToDoList';
import Input from 'components/Input';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const router = useNavigate();
    useEffect(() => {
      if (!localStorage.getItem("access")) {
        alert("로그인 후에 이용 가능합니다.");
        router("/login");
      }
    }, [router]);
    return (
        <>
            <Input />
            <ToDoList />
        </>
    )
}

export default Home