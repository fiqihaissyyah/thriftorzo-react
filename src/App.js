import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthLayout from "./components/layouts/auth";
import DefaultLayout from "./components/layouts/default";

import Home from "./pages/home/index";
import Login from "./pages/login/index";
import Register from "./pages/register/index";
import Profile from "./pages/profile/index";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />
                </Route>
                <Route element={<DefaultLayout />}>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/profile" element={<Profile />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
