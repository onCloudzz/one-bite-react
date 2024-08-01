import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import New from "./pages/New";

function App() {
    return (
        <div className="App">
            <div>
                <Link to="/">Home</Link>
                <Link to="/new">New</Link>
                <Link to="/diary">Diary</Link>
                <Link to="/edit">Edit</Link>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new" element={<New />} />
                <Route path="/diary/:id" element={<Diary />} />
                <Route path="/edit" element={<Edit />} />
            </Routes>
            
        </div>
    );
}

export default App;
