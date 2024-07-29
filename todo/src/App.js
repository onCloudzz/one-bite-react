import Header from './components/Header';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';
import { useState,useRef } from 'react';

import './App.css';

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: 'React 공부하기',
    createDateTime: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: '빨래 널기',
    createDateTime: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: '노래 연습하기',
    createDateTime: new Date().getTime(),
  }
]

function App() {
  const [todo, setTodo] = useState(mockTodo);

  const idRef = useRef(3);

  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      content,
      isDone: false,
      createDateTime: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current++;
  };

  const onUpdate = (targetID) => {
    setTodo(
      todo.map((it) => {
        if (it.id === targetID){
          return {
            ...it,
            isDone: !it.isDone,
          }
        }
        else {
          return it;
        }    
      })
    );
  };

  const onDelete = (targetID) => {
    setTodo(
      todo.filter((it) => it.id !== targetID)
    );
  };

  return (
    <div className="App">
      <Header/>
      <TodoEditor onCreate={onCreate}/>
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  );
}

export default App;
