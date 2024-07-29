import "../css/TodoList.css";
import TodoItem from "./TodoItem";
import { useMemo ,useState, useContext } from "react";
import { TodoStateContext } from "../App";

const TodoList = () => {
    const todo  = useContext(TodoStateContext);
    const [search, setSearch] = useState("");
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };
    const getSearchResult = () => {
        return search === ""
            ? todo
            : todo.filter((it) =>
                  it.content.toLowerCase().includes(search.toLowerCase())
              );
    };
    const analyzeTodo = useMemo(() => {
        console.log("analyzeTodo 함수 호출됨");
        const totalCount = todo.length;
        const doneCount = todo.filter((it) => it.isDone).length;
        const notDoneCount = totalCount - doneCount;
        return {
            totalCount,
            doneCount,
            notDoneCount,
        };
    }, [todo]);
    const { totalCount, doneCount, notDoneCount } = analyzeTodo;
    return (
        <div className="todo-list">
            <h4>Todo List 🌱</h4>
            <div>
                <div>총 개수: {totalCount}</div>
                <div>완료 개수: {doneCount}</div>
                <div>미완료 개수: {notDoneCount}</div>
            </div>
            <input
                onChange={onChangeSearch}
                value={search}
                className="search"
                type="text"
                placeholder="검색어를 입력하세요"
            />
            <div className="list-wrapper">
                {getSearchResult().map((it) => (
                    <TodoItem
                        key={it.id}
                        {...it}
                    />
                ))}
            </div>
        </div>
    );
};

TodoList.defaultProps = {
    todo: [],
}

export default TodoList;
