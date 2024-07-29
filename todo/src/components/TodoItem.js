import '../css/TodoItem.css';

const TodoItem = ({id, content, isDone, createDateTime, onUpdate, onDelete}) => {
    const onChangeCheckbox = () => {
        onUpdate(id);
    };

    const onClickDelete = () => {
        onDelete(id);
    }
    return (
        <div className="todo-item">
            <div className="checkbox-col">
                <input onClick={onChangeCheckbox} checked={isDone} type="checkbox" />
            </div>
            <div className="id-col">{id}</div>
            <div className="title-col">{content}</div>
            <div className="date-col">{new Date(createDateTime).toLocaleDateString()}</div>
            <div className="btn-col">
                <button onClick={onClickDelete}>
                    삭제
                </button>
            </div>
        </div>
    );
}

export default TodoItem;