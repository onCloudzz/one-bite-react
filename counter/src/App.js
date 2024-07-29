import './App.css';
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import React, { useState, useEffect } from 'react';
import Even from './components/even';

function App() {
  //eslint-disable-next-line
  const [count, setCount] = useState(0);  
  const [text, setText] = useState("");
  const handleSetCount = (value) => {
    setCount((prev) => {
      if (prev + value < 0) {
        return 0;
      }
      return prev + value;
    });
  }

  const handleChangeText = (e) => {
    setText(e.target.value);
  }

  const didMountRef = React.useRef(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    } else {
      console.log("컴포넌트 업데이트!");
    }
  });

  useEffect(() => {
    console.log("마운트 될 때만 실행!");
  }, []);

  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log("1초마다 실행!");
    }, 1000);

    return () => {
      console.log("Clena up!")
      clearInterval(intervalID);
    }
  });

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={handleChangeText}/>
      </section>
      <section>
        <Viewer count={count}/>
        {count % 2 === 0 && <Even/>}
      </section>
      <section>
        <Controller handleSetCount={handleSetCount}/>
      </section>
    </div>
  );
}

export default App;
