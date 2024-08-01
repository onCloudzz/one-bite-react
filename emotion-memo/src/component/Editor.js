import "./Editor.css";
import Button from "./Button";
import { getFormmatedDate, emotionList } from "../util";
import { useNavigate } from "react-router-dom";

const { useState } = require("react");

const Editor = ({ initData, onSubmit }) => {
    const [state, setState] = useState({
        date: getFormmatedDate(new Date()),
        emotionId: 3,
        content: "",
    });

    const navigate = useNavigate();

    const handleChangeDate = (e) => {
        setState({
            ...state,
            date: e.target.value,
        });
    };

    const handleChangeContent = (e) => {
        setState({
            ...state,
            content: e.target.value,
        });
    };

    const handleSubmit = () => {
        onSubmit(state);
    };

    const handleOnGoBack = () => {
        navigate(-1);
    };

    return (
        <div className="Editor">
            <div className="editor_section">
                <h4>오늘의 날짜</h4>
                <div className="input_wrapper">
                    <input
                        type="date"
                        value={state.date}
                        onChange={handleChangeDate}
                    />
                </div>
            </div>
            <div className="editor_section">
                <h4>오늘의 감정</h4>
                <div className="input_wrapper emotion_list_wrapper">
                    {emotionList.map((it) => {
                        <img key={it.id} alt={`emotion${it.id}`} src={it.img} />;
                    })}
                </div>
            </div>
            <div className="editor_section">
                <h4>오늘의 일기</h4>
                <div className="input_wrapper">
                    <textarea
                        placeholder="오늘은 어땠나요?"
                        value={state.content}
                        onChange={handleChangeContent}
                    />
                </div>
                <div className="editor_section bottom_section">
                    <Button text={"취소하기"} onClick={handleOnGoBack} />
                    <Button
                        text={"저장하기"}
                        type={"positive"}
                        onClick={handleSubmit}
                    />
                </div>
            </div>
        </div>
    );
};

export default Editor;
