import { useParams } from "react-router-dom";

const Diary = () => {
    const params = useParams();
    console.log(params);
    const { id } = params;
    return (
        <div>
            <div>{id}번 일기</div>
        </div>
    );
};

export default Diary;
