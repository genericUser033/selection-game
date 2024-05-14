import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Main from "./main";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Navigate to="/main" />}></Route>
                <Route exact path="/main" element={<Main />}></Route>
            </Routes>
        </BrowserRouter>
      );
}

export default App;
