import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Main from "./main";
import React, {createContext, useState} from "react";
import {Ranking} from "./ranking";
import {Header} from "./header";


export const RankingContext = createContext([]);
function App() {
    const [value, setValue] = useState(null);

    return (
        // <UserContext.Provider value={{
        //     userId: null,
        //     accessToken: null
        // }}>
        <RankingContext.Provider value={{value, setValue}}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Navigate to="/main" />}></Route>
                    <Route exact path="/main" element={<Main />}></Route>
                    <Route exact path="/ranking" element={<Ranking />}></Route>
                </Routes>
            </BrowserRouter>
        </RankingContext.Provider>
      );
}

export default App;

export class UserContext {
}