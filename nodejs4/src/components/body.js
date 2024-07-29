import React, { useState } from 'react';

const Viewer = ({ number }) => {
    return (
        <>
            <div>
                {number % 2 === 0 ? <h3>'짝수'</h3> : <h3>'홀수'</h3>}
            </div>
        </>
    )
}

function body(){
    // const handleOnClick = (e) => console.log(e.target.innerText);
    // const number = 10;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const [count, setCount] = useState(0);
    // const onIncrease = () => {
    //     setCount(count + 1);
    // };
    
    // const [text, setText] = useState('');
    // const handleonChange = (e) => {
    //     setText(e.target.value);
    //     console.log(text);
    // }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = useState({
        name: '',
        gender: '',
        birth: '',
        bio: ''
    });
    const handleOnChange = (e) => {
        console.log(e.target.name, e.target.value);
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [count, setCount] = React.useState(0);
    const onIncrease = () => {
        setCount(count + 1);
    };
    const onDecrease = () => {
        setCount(count - 1);
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [username, setUsername] = useState('');

    const textRef = React.createRef();
    const handleOnChangename = (e) => {
        setUsername(e.target.value);
    };
    const handleSendName = () => {
        alert(textRef.current.value);
        textRef.current.value = '';
    }
    return (
        <>
            <h1>Body</h1>
            {/* <h2>{count}</h2>
            <button onClick={onIncrease}>+1</button> */}
            <div>
                <input 
                    name="name"
                    value={state.name}
                    onChange={handleOnChange}
                    placeholder='이름'
                />
                {/* <input onChange={handleonChange} type="datetime-local"/> */}
            </div>
            <div>
                <select name="gender" value={state.gender} onChange={handleOnChange}>
                    <option value="">성별</option>
                    <option value={"남성"}>남성</option>
                    <option value={"여성"}>여성</option>
                </select>
            </div>
            <div>
                <input
                    name="birth"
                    type="date"
                    value={state.birth}
                    onChange={handleOnChange}
                />
            </div>
            <div>
                <textarea
                    name="bio"
                    value={state.bio}
                    onChange={handleOnChange}
                />
            </div>
            <div>
                <h2>{count}</h2>
                <button onClick={onIncrease}>증가</button>
                <button onClick={onDecrease}>감소</button>
                <Viewer number={count} />
            </div>
            <div>
                <input ref={textRef} value={username} onChange={handleOnChangename}/>
                <button onClick={handleSendName}>작성완료</button>
            </div>
            {/* <div className="body">
                <button onClick={handleOnClick}>A 버튼</button>
                <button onClick={handleOnClick}>B 버튼</button>
            </div> */}
        </>
    );
}

export default body;