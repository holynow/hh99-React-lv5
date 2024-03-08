import {v4 as uuidv4} from 'uuid';
const ADD_TODO = "ADD_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const DELETE_TODO = "DELETE_TODO";

export const addTodo = (payload)=> {
    return {
        type: ADD_TODO, payload
    }
}
export const updateTodo = (payload)=> {
    return {
        type: UPDATE_TODO, payload
    }
}
export const deleteTodo = (payload)=> {
    return {
        type: DELETE_TODO, payload
    }
}

//초기값
const initialState = {
    todos: [
        {
            id:uuidv4(),
            title:"사악한 리액트.",
            text:"리액트 잘하고싶다.. 진짜루...",
            isDone:false,
        }
    ]
}

//리듀서
const todos = (state=initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos:[...state.todos, action.payload]
            }
        case UPDATE_TODO:
            return {
                todos: state.todos.map((todo) => todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo)
            }
        case DELETE_TODO:
            return {
                todos: state.todos.filter((todo) => todo.id !== action.payload)
            }
        default:
            return state;
    }
}

export default todos;