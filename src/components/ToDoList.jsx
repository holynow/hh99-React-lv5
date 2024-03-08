// import { data } from 'shared/data';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateTodo, deleteTodo } from '../redux/modules/toDos';
import styled from 'styled-components';

const TodoListWrap = styled.div`
 margin-top: 100px;
 h2 {
    font-size: 40px;
    font-weight: 800;
    color: #fff;
 }
 div~div {
    margin-top: 70px;
 }
 @media (max-width:800px){
    margin-top: 70px;
    }
`
const WorkingList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 20px;
    li {
        position: relative;
        display: grid;
        grid-template-rows: 30px auto 40px;
        gap: 20px;
        padding: 30px 20px 25px;
        border-radius: 20px;
        background: rgba(255,255,255,.8);
        transition: all .1s ease-in-out;
        box-shadow: 0px 0px 0px rgba(0,0,0,.3);
        &:hover {
            transform: translateY(-3px);
            box-shadow: 6px 6px 10px rgba(0,0,0,.1);
            background: rgba(255,255,255,1);
        }
        h3 {
            font-size: 26px;
            font-weight: 700;
        }
        p {
            font-size: 20px;
            word-break: break-all;
        }
    }
    @media (max-width:800px){
        grid-template-columns: repeat(2, 1fr);
    }
`
const BtnWrap = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    gap: 10px;
    button, a {
        color: rgb(218, 99, 25);
        font-size: 18px;
        font-weight: 400;
        margin: 0;
        padding: 0;
        line-height: 1.2;
    }
    button + button {
        color: #3148f5;
    }
    a {
        margin-right: auto;
        color: #3148f5;
    }
   
`

const ToDoList = () => {
    const todos = useSelector(({ todos }) => todos.todos)
    const dispatch = useDispatch();
    return (
        <TodoListWrap>
            <div>
                <h2>🎫 Working..</h2>
                <WorkingList>
                    {
                        todos.filter((item) => !item.isDone).map(item => {
                            return (
                                <li key={item.id}>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                    <BtnWrap>
                                        <Link to={`/${item.id}`}>상세보기</Link>
                                        <button onClick={() => {
                                            dispatch(deleteTodo(item.id))
                                            console.log(item.id);
                                        }}>삭제하기</button>
                                        <button onClick={() => {
                                            dispatch(updateTodo(item.id))
                                        }}>{item.isDone ? '취소' : '완료'}</button>
                                    </BtnWrap>
                                </li>
                            )
                        })
                    }
                </WorkingList>
            </div>
            <div>
                <h2>🎟️ Done..!</h2>
                <WorkingList>
                    {
                        todos.filter((item) => item.isDone).map(item => {
                            return (
                                <li key={item.id}>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                    <BtnWrap>
                                        <Link to={`/${item.id}`}>상세보기</Link>
                                        <button onClick={() => {
                                            dispatch(deleteTodo(item.id))
                                            console.log(item.id);
                                        }}>삭제하기</button>
                                        <button onClick={() => {
                                            dispatch(updateTodo(item.id))
                                        }}>{item.isDone ? '취소' : '완료'}</button>
                                    </BtnWrap>
                                </li>
                            )
                        })
                    }
                </WorkingList>
            </div>
        </TodoListWrap>
    )
}
export default ToDoList;