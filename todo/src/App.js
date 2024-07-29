import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import React, { useRef, useReducer, useCallback, useMemo   } from "react";
// import TestComp from './components/TestComp';
import "./App.css";



function reducer(state, action) {
    //상태변화 코드
    switch (action.type) {
        case "CREATE":
            return [action.newItem, ...state];
        case "UPDATE":
            return state.map((item) =>
                item.id === action.targetID
                    ? {
                          ...item,
                          isDone: !item.isDone,
                      }
                    : item
            );
        case "DELETE":
            return state.filter((it) => it.id !== action.targetID)
        default:
            return state;
    }
}

const mockTodo = [
    {
        id: 0,
        isDone: false,
        content: "React 공부하기",
        createDateTime: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content: "빨래 널기",
        createDateTime: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        content: "노래 연습하기",
        createDateTime: new Date().getTime(),
    },
];

export const TodoStateContext = React.createContext();
export const TodoDispatchContext = React.createContext();

function App() {
    // const [todo, setTodo] = useState(mockTodo);
    const [todo, dispatch] = useReducer(reducer, mockTodo);
    
    

    const idRef = useRef(3);

    const onCreate = (content) => {
        dispatch({
            type: "CREATE",
            newItem: {
                id: idRef.current,
                isDone: false,
                content,
                createDateTime: new Date().getTime(),
            },
        });
        idRef.current++;
    };

    const onUpdate = useCallback((targetID) => {
        dispatch({
            type: "UPDATE",
            targetID,
        });
     }, []);

    const onDelete = useCallback((targetID) => {
        dispatch({
            type: "DELETE",
            targetID,
        });
    }, []);

    const memorizedDispatch = useMemo(() => {
        return {onCreate, onUpdate, onDelete};
    }, [])
    
    return (
        <div className="App">
            {/* <TestComp/> */}
            <Header />
            <TodoStateContext.Provider value={ todo }>
                <TodoDispatchContext.Provider value={memorizedDispatch}>
                    <TodoEditor />
                    <TodoList />
                </TodoDispatchContext.Provider>
            </TodoStateContext.Provider>
        </div>
    );
}

export default App;

