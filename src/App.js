import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import MainPage from "./ui/MainPage"
import Expenses from "./ui/rightside/expenses/Expenses"
import Permissions from "./ui/rightside/permissions/Permissions"
import Users from "./ui/rightside/users/Users"

function App() {
    return (
        <div className="row min-vh-100">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage/>}>
                        <Route index element={<Users/>}/>
                        <Route path="users" element={<Users/>}/>
                        <Route path="expenses" element={<Expenses/>}/>
                        <Route path="permissions" element={<Permissions/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
