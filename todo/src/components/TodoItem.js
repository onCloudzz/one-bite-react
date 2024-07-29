import React, { useContext } from "react";
import "../css/TodoItem.css";
import { TodoDispatchContext } from "../App";

const TodoItem = ({
    id,
    content,
    isDone,
    createDateTime,
}) => {
    console.log(`TodoItem 렌더링 ${id}`);
    const { onUpdate, onDelete } = useContext(TodoDispatchContext);

    const onChangeCheckbox = () => {
        onUpdate(id);
    };

    const onClickDelete = () => {
        onDelete(id);
    };
    return (
        <div className="todo-item">
            <div className="checkbox-col">
                <input
                    onClick={onChangeCheckbox}
                    checked={isDone}
                    type="checkbox"
                />
            </div>
            <div className="id-col">{id}</div>
            <div className="title-col">{content}</div>
            <div className="date-col">
                {new Date(createDateTime).toLocaleDateString()}
            </div>
            <div className="btn-col">
                <button onClick={onClickDelete}>삭제</button>
            </div>
        </div>
    );
};

export default React.memo(TodoItem);
