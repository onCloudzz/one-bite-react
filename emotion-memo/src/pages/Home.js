import Button from "../component/Button";
import Editor from "../component/Editor";
import Header from "../component/Header";

const Home = () => {
    return (
        <div>
            <Header title={"Home"}
                leftChild={
                    <Button
                        text={"긍정 버튼"}
                        onClick={() => {
                            alert("긍정 버튼");
                        }}
                        type="positive"
                    />
                }
                rightChild={
                    <Button
                        text={"부정 버튼"}
                        onClick={() => {
                            alert("부정 버튼");
                        }}
                        type="negative"
                    />
                }/>

            <div>
                <Editor
                    onSubmit={() => {
                        alert("저장하기");
                    }}
                />
            </div>
        </div>
    );
};

export default Home;
