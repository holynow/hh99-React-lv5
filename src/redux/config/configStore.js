import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/toDos";

const rootReducer = combineReducers({
    todos,
});
const store = createStore(rootReducer);

export default store;